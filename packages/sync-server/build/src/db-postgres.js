import { Worker } from 'node:worker_threads';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sigSab = new SharedArrayBuffer(16);
const reqSab = new SharedArrayBuffer(64 * 1024);
const dataSab = new SharedArrayBuffer(4 * 1024 * 1024);
const signal = new Int32Array(sigSab);
const reqView = new Uint8Array(reqSab);
const dataView = new Uint8Array(dataSab);

let worker;

function getWorker() {
  if (!worker) {
    worker = new Worker(join(__dirname, 'db-postgres-worker.mjs'), { workerData: { sigSab, dataSab, reqSab } });
    worker.on('error', (e) => { console.error('[db-worker-error]', e); });
    worker.unref();
  }
  return worker;
}

function syncCall(op, sql, params) {
  getWorker();
  const reqJson = JSON.stringify({ op, sql, params: params || [] });
  const reqBuf = Buffer.from(reqJson, 'utf8');
  if (reqBuf.length > reqView.length) throw new Error('Request too large');
  reqView.set(reqBuf);
  Atomics.store(signal, 3, reqBuf.length);

  const prevResp = Atomics.load(signal, 1);
  const newReq = Atomics.load(signal, 0) + 1;
  Atomics.store(signal, 0, newReq);

  const deadline = Date.now() + 60000;
  while (Atomics.load(signal, 1) !== newReq) {
    const remaining = deadline - Date.now();
    if (remaining <= 0) throw new Error('DB query timeout');
    Atomics.wait(signal, 1, prevResp, Math.min(remaining, 5000));
  }

  const respLen = Atomics.load(signal, 2);
  const respJson = Buffer.from(dataView.slice(0, respLen)).toString('utf8');
  const resp = JSON.parse(respJson);
  if (resp.error) throw new Error(resp.error);
  return resp.result;
}

function quoteAliases(sql) {
  return sql.replace(/\b(as|AS|As|aS)\s+([A-Za-z_][A-Za-z0-9_]*)/g, function(m, as, name) {
    if (/[A-Z]/.test(name) && !name.startsWith('"')) {
      return as + ' "' + name + '"';
    }
    return m;
  });
}

function convertParams(sql) {
  const withQuoted = quoteAliases(sql);
  let idx = 0;
  return withQuoted.replace(/\?/g, function() { return "\$" + (++idx); });
}

class WrappedPostgresDatabase {
  _init() {
    const schema = `
      CREATE SCHEMA IF NOT EXISTS actual;
      CREATE TABLE IF NOT EXISTS actual.auth (method TEXT NOT NULL DEFAULT 'password', display_name TEXT, extra_data TEXT, active INTEGER NOT NULL DEFAULT 1, PRIMARY KEY (method));
      CREATE TABLE IF NOT EXISTS actual.sessions (token TEXT PRIMARY KEY, expires_at INTEGER, user_id TEXT, auth_method TEXT);
      CREATE TABLE IF NOT EXISTS actual.files (id TEXT PRIMARY KEY, group_id TEXT, sync_version SMALLINT, encrypt_meta TEXT, encrypt_keyid TEXT, encrypt_salt TEXT, encrypt_test TEXT, deleted BOOLEAN DEFAULT FALSE, name TEXT, owner TEXT);
      CREATE TABLE IF NOT EXISTS actual.users (id TEXT PRIMARY KEY, user_name TEXT, display_name TEXT, role TEXT, enabled INTEGER NOT NULL DEFAULT 1, owner INTEGER NOT NULL DEFAULT 0);
      CREATE TABLE IF NOT EXISTS actual.user_access (user_id TEXT, file_id TEXT, PRIMARY KEY (user_id, file_id));
      CREATE TABLE IF NOT EXISTS actual.secrets (name TEXT PRIMARY KEY, value TEXT);
      CREATE TABLE IF NOT EXISTS actual.server_prefs (key TEXT PRIMARY KEY, value TEXT);
    `;
    syncCall('exec', schema, []);
  }

  all(sql, params = []) {
    const r = syncCall('all', convertParams(sql), params);
    return r.rows || [];
  }

  first(sql, params = []) {
    const rows = this.all(sql, params);
    return rows.length === 0 ? null : rows[0];
  }

  mutate(sql, params = []) {
    const trimmed = sql.trim().toUpperCase();
    if (trimmed === 'BEGIN TRANSACTION' || trimmed === 'BEGIN') {
      syncCall('BEGIN', '', []);
      return { changes: 0, insertId: null };
    }
    if (trimmed === 'COMMIT') {
      syncCall('COMMIT', '', []);
      return { changes: 0, insertId: null };
    }
    if (trimmed === 'ROLLBACK') {
      syncCall('ROLLBACK', '', []);
      return { changes: 0, insertId: null };
    }
    const r = syncCall('mutate', convertParams(sql), params);
    return { changes: r.changes || 0, insertId: null };
  }

  exec(sql) {
    syncCall('exec', sql, []);
  }

  transaction(fn) {
    this.mutate('BEGIN');
    try {
      fn();
      this.mutate('COMMIT');
    } catch (e) {
      this.mutate('ROLLBACK');
      throw e;
    }
  }

  prepare(sql) {
    const self = this;
    return {
      run: function() { return self.mutate(sql, Array.from(arguments)); },
      get: function() { return self.first(sql, Array.from(arguments)); },
      all: function() { return self.all(sql, Array.from(arguments)); },
    };
  }

  close() {}
}

let _pgDb;
export function openPostgresDatabase() {
  if (!_pgDb) {
    _pgDb = new WrappedPostgresDatabase();
    try { _pgDb._init(); } catch (e) { console.error('[db-init]', e.message); }
  }
  return _pgDb;
}
