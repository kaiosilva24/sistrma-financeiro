import express from 'express';
import rateLimit from 'express-rate-limit';
import pg from 'pg';
const __pgPool = new pg.Pool({
  options: '-c search_path=actual,public',
  host: process.env.PG_HOST || '129.80.149.224',
  port: parseInt(process.env.PG_PORT || '8080'),
  user: process.env.PG_USER || 'admin',
  password: process.env.PG_PASSWORD || 'SecurePass_WhatsApp_2026!',
  database: process.env.PG_DATABASE || 'sistema_financeiro_pessoal',
});
import { bootstrap, getActiveLoginMethod, getLoginMethod, getServerPrefs, getUserInfo, isAdmin, listLoginMethods, needsBootstrap, setServerPrefs, } from './account-db.js';
import { isValidRedirectUrl, loginWithOpenIdSetup } from './accounts/openid.js';
import { changePassword, loginWithPassword } from './accounts/password.js';
import { errorMiddleware, requestLoggerMiddleware } from './util/middlewares.js';
import { validateAuthHeader, validateSession } from './util/validate-user.js';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorMiddleware);
app.use(requestLoggerMiddleware);
const authRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10000, // effectively disabled
    legacyHeaders: false,
    standardHeaders: true,
    message: { status: 'error', reason: 'too-many-requests' },
});
export { app as handlers, authRateLimiter };
// Non-authenticated endpoints:
//
// /needs-bootstrap
// /boostrap (special endpoint for setting up the instance, cant call again)
// /login
app.get('/needs-bootstrap', async (req, res) => {
    // NEEDS_BOOTSTRAP_PATCH: async direct PG to bypass deasync hang
    try {
        const authRes = await __pgPool.query('SELECT method, active FROM auth');
        const bootstrapped = authRes.rows.length > 0;
        const availableLoginMethods = authRes.rows.map(r => ({
            method: r.method,
            active: r.active === 1 || r.active === true,
            displayName: r.method === 'password' ? 'Password' : r.method,
        }));
        const activeMethod = authRes.rows.find(r => r.active === 1 || r.active === true)?.method || 'password';
        res.send({
            status: 'ok',
            data: {
                bootstrapped,
                loginMethod: activeMethod,
                availableLoginMethods,
                multiuser: activeMethod === 'openid',
            },
        });
    } catch (e) {
        console.error('[needs-bootstrap] PG error:', e.message);
        res.status(500).send({ status: 'error', reason: 'database-error' });
    }
});
app.post('/bootstrap', authRateLimiter, async (req, res) => {
    const boot = await bootstrap(req.body);
    if (boot?.error) {
        res.status(400).send({ status: 'error', reason: boot?.error });
        return;
    }
    res.send({ status: 'ok', data: boot });
});
app.get('/login-methods', (req, res) => {
    const methods = listLoginMethods();
    res.send({ status: 'ok', methods });
});
app.post('/login', authRateLimiter, async (req, res) => {
    const loginMethod = getLoginMethod(req);
    console.log('Logging in via ' + loginMethod);
    let tokenRes = null;
    switch (loginMethod) {
        case 'header': {
            const headerVal = req.get('x-actual-password') || '';
            const obfuscated = '*'.repeat(headerVal.length) || 'No password provided.';
            console.debug('HEADER VALUE: ' + obfuscated);
            if (headerVal === '') {
                res.send({ status: 'error', reason: 'invalid-header' });
                return;
            }
            else {
                if (validateAuthHeader(req)) {
                    tokenRes = loginWithPassword(headerVal);
                }
                else {
                    res.send({ status: 'error', reason: 'proxy-not-trusted' });
                    return;
                }
            }
            break;
        }
        case 'openid': {
            if (!isValidRedirectUrl(req.body.returnUrl)) {
                res
                    .status(400)
                    .send({ status: 'error', reason: 'Invalid redirect URL' });
                return;
            }
            const { error, url } = await loginWithOpenIdSetup(req.body.returnUrl, req.body.password);
            if (error) {
                res.status(400).send({ status: 'error', reason: error });
                return;
            }
            res.send({ status: 'ok', data: { returnUrl: url } });
            return;
        }
        default:
            tokenRes = loginWithPassword(req.body.password);
            break;
    }
    const { error, token } = tokenRes;
    if (error) {
        res.status(400).send({ status: 'error', reason: error });
        return;
    }
    res.send({ status: 'ok', data: { token } });
});
app.post('/change-password', (req, res) => {
    const session = validateSession(req, res);
    if (!session)
        return;
    if (!isAdmin(session.user_id)) {
        res.status(403).send({
            status: 'error',
            reason: 'forbidden',
            details: 'permission-not-found',
        });
        return;
    }
    if (session.auth_method !== 'password') {
        res.status(403).send({
            status: 'error',
            reason: 'forbidden',
            details: 'password-auth-not-active',
        });
        return;
    }
    const { error } = changePassword(req.body.password);
    if (error) {
        res.status(400).send({ status: 'error', reason: error });
        return;
    }
    res.send({ status: 'ok', data: {} });
});
app.post('/server-prefs', (req, res) => {
    const session = validateSession(req, res);
    if (!session)
        return;
    if (!isAdmin(session.user_id)) {
        res.status(403).send({
            status: 'error',
            reason: 'forbidden',
            details: 'permission-not-found',
        });
        return;
    }
    const { prefs } = req.body || {};
    if (!prefs || typeof prefs !== 'object') {
        res.status(400).send({ status: 'error', reason: 'invalid-prefs' });
        return;
    }
    setServerPrefs(prefs);
    res.send({ status: 'ok', data: {} });
});
app.get('/validate', (req, res) => {
    const session = validateSession(req, res);
    if (session) {
        const user = getUserInfo(session.user_id);
        if (!user) {
            res.status(400).send({ status: 'error', reason: 'User not found' });
            return;
        }
        res.send({
            status: 'ok',
            data: {
                validated: true,
                userName: user?.user_name,
                permission: user?.role,
                userId: session?.user_id,
                displayName: user?.display_name,
                loginMethod: session?.auth_method,
                prefs: getServerPrefs(),
            },
        });
    }
});
