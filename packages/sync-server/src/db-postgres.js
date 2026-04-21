import pg from 'pg';

const { Pool } = pg;

let pool;

function getPool() {
  if (!pool) {
    pool = new Pool({
      host: process.env.PG_HOST || '129.80.149.224',
      port: parseInt(process.env.PG_PORT || '8080'),
      user: process.env.PG_USER || 'admin',
      password: process.env.PG_PASSWORD || 'SecurePass_WhatsApp_2026!',
      database: process.env.PG_DATABASE || 'sistema_financeiro_pessoal',
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000,
    });
  }
  return pool;
}

class WrappedPostgresDatabase {
  constructor() {
    this.pool = getPool();
    this._ready = this._init();
  }

  async _init() {
    // Create tables if they don't exist (mirrors SQLite account-db schema)
    const client = await this.pool.connect();
    try {
      await client.query(`
        CREATE TABLE IF NOT EXISTS auth
          (method TEXT NOT NULL DEFAULT 'password',
           display_name TEXT,
           extra_data TEXT,
           active INTEGER NOT NULL DEFAULT 1,
           PRIMARY KEY (method));

        CREATE TABLE IF NOT EXISTS sessions
          (token TEXT PRIMARY KEY,
           expires_at INTEGER,
           user_id TEXT,
           auth_method TEXT);

        CREATE TABLE IF NOT EXISTS files
          (id TEXT PRIMARY KEY,
           group_id TEXT,
           sync_version SMALLINT,
           encrypt_meta TEXT,
           encrypt_keyid TEXT,
           encrypt_salt TEXT,
           encrypt_test TEXT,
           deleted BOOLEAN DEFAULT FALSE,
           name TEXT,
           owner TEXT);

        CREATE TABLE IF NOT EXISTS users
          (id TEXT PRIMARY KEY,
           user_name TEXT,
           display_name TEXT,
           role TEXT,
           enabled INTEGER NOT NULL DEFAULT 1,
           owner INTEGER NOT NULL DEFAULT 0);

        CREATE TABLE IF NOT EXISTS user_access
          (user_id TEXT,
           file_id TEXT,
           PRIMARY KEY (user_id, file_id));

        CREATE TABLE IF NOT EXISTS secrets
          (name TEXT PRIMARY KEY,
           value TEXT);

        CREATE TABLE IF NOT EXISTS server_prefs
          (key TEXT PRIMARY KEY,
           value TEXT);
      `);
    } finally {
      client.release();
    }
  }

  // Convert SQLite ? placeholders to PostgreSQL $1, $2, ... placeholders
  _convertParams(sql, params) {
    let idx = 0;
    const converted = sql.replace(/\?/g, () => `$${++idx}`);
    return converted;
  }

  all(sql, params = []) {
    // Synchronous wrapper using deasync - needed for compatibility with existing sync code
    const deasync = require('deasync');
    let result;
    let done = false;
    let error;

    const pgSql = this._convertParams(sql, params);
    this.pool.query(pgSql, params).then(res => {
      result = res.rows;
      done = true;
    }).catch(err => {
      error = err;
      done = true;
    });

    deasync.loopWhile(() => !done);
    if (error) throw error;
    return result;
  }

  first(sql, params = []) {
    const rows = this.all(sql, params);
    return rows.length === 0 ? null : rows[0];
  }

  exec(sql) {
    const deasync = require('deasync');
    let done = false;
    let error;

    this.pool.query(sql).then(() => {
      done = true;
    }).catch(err => {
      error = err;
      done = true;
    });

    deasync.loopWhile(() => !done);
    if (error) throw error;
  }

  mutate(sql, params = []) {
    const trimmed = sql.trim().toUpperCase();
    // Handle transaction control statements as direct queries
    if (trimmed === 'BEGIN TRANSACTION' || trimmed === 'BEGIN' || trimmed === 'COMMIT' || trimmed === 'ROLLBACK') {
      this.exec(sql);
      return { changes: 0, insertId: null };
    }

    const deasync = require('deasync');
    let result;
    let done = false;
    let error;

    const pgSql = this._convertParams(sql, params);
    this.pool.query(pgSql, params).then(res => {
      result = { changes: res.rowCount || 0, insertId: null };
      done = true;
    }).catch(err => {
      error = err;
      done = true;
    });

    deasync.loopWhile(() => !done);
    if (error) throw error;
    return result;
  }

  transaction(fn) {
    const deasync = require('deasync');
    let done = false;
    let error;

    const runTx = async () => {
      const client = await this.pool.connect();
      try {
        await client.query('BEGIN');
        // Override methods temporarily to use this client
        const origAll = this.all.bind(this);
        const origFirst = this.first.bind(this);
        const origMutate = this.mutate.bind(this);
        const origExec = this.exec.bind(this);
        const self = this;

        // Replace pool methods with client methods for the transaction
        this.all = (sql, params = []) => {
          let r; let d = false; let e;
          const pgSql = self._convertParams(sql, params);
          client.query(pgSql, params).then(res => { r = res.rows; d = true; }).catch(err => { e = err; d = true; });
          deasync.loopWhile(() => !d);
          if (e) throw e;
          return r;
        };
        this.first = (sql, params = []) => {
          const rows = this.all(sql, params);
          return rows.length === 0 ? null : rows[0];
        };
        this.mutate = (sql, params = []) => {
          if (sql === 'BEGIN TRANSACTION' || sql === 'BEGIN') return;
          if (sql === 'COMMIT') return;
          if (sql === 'ROLLBACK') return;
          let r; let d = false; let e;
          const pgSql = self._convertParams(sql, params);
          client.query(pgSql, params).then(res => { r = { changes: res.rowCount || 0, insertId: null }; d = true; }).catch(err => { e = err; d = true; });
          deasync.loopWhile(() => !d);
          if (e) throw e;
          return r;
        };
        this.exec = (sql) => {
          let d = false; let e;
          client.query(sql).then(() => { d = true; }).catch(err => { e = err; d = true; });
          deasync.loopWhile(() => !d);
          if (e) throw e;
        };

        fn();

        await client.query('COMMIT');

        // Restore original methods
        this.all = origAll;
        this.first = origFirst;
        this.mutate = origMutate;
        this.exec = origExec;
      } catch (err) {
        await client.query('ROLLBACK');
        throw err;
      } finally {
        client.release();
      }
    };

    runTx().then(() => { done = true; }).catch(err => { error = err; done = true; });
    deasync.loopWhile(() => !done);
    if (error) throw error;
  }

  close() {
    // Pool stays open
  }
}

let _pgDb;

export function openPostgresDatabase() {
  if (!_pgDb) {
    _pgDb = new WrappedPostgresDatabase();
  }
  return _pgDb;
}
