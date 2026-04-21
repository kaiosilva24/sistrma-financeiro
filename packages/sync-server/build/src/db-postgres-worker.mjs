
import { workerData } from 'node:worker_threads';
import pg from 'pg';
// Parse bigint (OID 20) as JS number so count(*) returns number not string
pg.types.setTypeParser(20, v => parseInt(v, 10));

const { sigSab, dataSab, reqSab } = workerData;
const signal = new Int32Array(sigSab);  // [0]=req, [1]=resp, [2]=len
const dataView = new Uint8Array(dataSab);
const reqView = new Uint8Array(reqSab);

const pool = new pg.Pool({
  options: '-c search_path=actual,public',
  host: process.env.PG_HOST || '129.80.149.224',
  port: parseInt(process.env.PG_PORT || '8080'),
  user: process.env.PG_USER || 'admin',
  password: process.env.PG_PASSWORD || 'SecurePass_WhatsApp_2026!',
  database: process.env.PG_DATABASE || 'sistema_financeiro_pessoal',
  max: 5,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000,
});

let txClient = null;

function writeResponse(obj) {
  const json = JSON.stringify(obj);
  const buf = Buffer.from(json, 'utf8');
  if (buf.length > dataView.length) {
    const err = JSON.stringify({ error: 'response too large: ' + buf.length });
    const b2 = Buffer.from(err, 'utf8');
    dataView.set(b2);
    Atomics.store(signal, 2, b2.length);
  } else {
    dataView.set(buf);
    Atomics.store(signal, 2, buf.length);
  }
  // set response counter = request counter
  Atomics.store(signal, 1, Atomics.load(signal, 0));
  Atomics.notify(signal, 1);
}

async function handleRequest() {
  // read request JSON from reqSab
  const reqLen = Atomics.load(signal, 3);
  const reqJson = Buffer.from(reqView.slice(0, reqLen)).toString('utf8');
  const msg = JSON.parse(reqJson);
  const { op, sql, params } = msg;
  try {
    let result;
    const runner = txClient || pool;
    if (op === 'BEGIN') {
      txClient = await pool.connect();
      await txClient.query('BEGIN');
      result = { ok: true };
    } else if (op === 'COMMIT') {
      if (txClient) { await txClient.query('COMMIT'); txClient.release(); txClient = null; }
      result = { ok: true };
    } else if (op === 'ROLLBACK') {
      if (txClient) { try { await txClient.query('ROLLBACK'); } catch(_){}; txClient.release(); txClient = null; }
      result = { ok: true };
    } else if (op === 'all' || op === 'first') {
      const r = await runner.query(sql, params);
      result = { rows: r.rows };
    } else if (op === 'mutate' || op === 'exec') {
      const r = await runner.query(sql, params);
      result = { changes: r.rowCount || 0 };
    }
    writeResponse({ result });
  } catch (e) {
    writeResponse({ error: e.message || String(e) });
  }
}

// Poll for new requests
async function loop() {
  let lastReq = 0;
  while (true) {
    // Wait for request counter to change
    const cur = Atomics.load(signal, 0);
    if (cur !== lastReq) {
      lastReq = cur;
      await handleRequest();
    } else {
      // Async wait - can't use Atomics.wait in main worker if we need event loop for pg
      await new Promise(r => setImmediate(r));
    }
  }
}
loop();
