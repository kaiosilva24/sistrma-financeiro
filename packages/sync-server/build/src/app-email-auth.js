import express from 'express';
import * as bcrypt from 'bcrypt';
import { getAccountDb } from './account-db.js';

const app = express();
app.use(express.json());

export { app as handlers };

// A tabela actual.email_credentials e criada pelo _init() do db-postgres.js

// Middleware to validate admin session
function requireAdmin(req, res, next) {
  const token = req.headers['x-actual-token'];
  if (!token) {
    return res.status(401).json({ status: 'error', reason: 'unauthorized' });
  }
  const db = getAccountDb();
  try {
    const session = db.first('SELECT * FROM actual.sessions WHERE token = ?', [token]);
    if (!session) {
      return res.status(401).json({ status: 'error', reason: 'unauthorized' });
    }
    const user = db.first('SELECT * FROM actual.users WHERE id = ?', [session.user_id]);
    if (!user || user.role !== 'ADMIN') {
      return res.status(403).json({ status: 'error', reason: 'forbidden' });
    }
    req.adminUser = user;
    next();
  } catch (err) {
    console.error('[email-auth] requireAdmin error:', err.message);
    return res.status(500).json({ status: 'error', reason: 'server-error' });
  }
}

// ============ SETUP - CREATE FIRST ADMIN ============

// POST /email-auth/setup - Create first admin (only works when no email users exist)
app.post('/setup', (req, res) => {
  const { email, password, displayName } = req.body;

  if (!email || !password) {
    return res.status(400).json({ status: 'error', reason: 'email-and-password-required' });
  }

  if (password.length < 6) {
    return res.status(400).json({ status: 'error', reason: 'password-too-short' });
  }

  const db = getAccountDb();
  try {
    const existingAdmin = db.first('SELECT id FROM actual.email_credentials LIMIT 1');

    if (existingAdmin) {
      return res.status(400).json({ status: 'error', reason: 'setup-already-done' });
    }

    const userId = crypto.randomUUID();
    const credId = crypto.randomUUID();
    const passwordHash = bcrypt.hashSync(password, 12);

    db.transaction(() => {
      db.mutate(
        'INSERT INTO actual.users (id, user_name, display_name, enabled, owner, role) VALUES (?, ?, ?, 1, 1, ?)',
        [userId, email.toLowerCase(), displayName || 'Administrador', 'ADMIN']
      );
      db.mutate(
        'INSERT INTO actual.email_credentials (id, user_id, email, password_hash) VALUES (?, ?, ?, ?)',
        [credId, userId, email.toLowerCase(), passwordHash]
      );
      // Mark system as bootstrapped so Actual doesn't show its default login
      const existingAuth = db.first('SELECT * FROM actual.auth LIMIT 1');
      if (!existingAuth) {
        db.mutate(
          "INSERT INTO actual.auth (method, display_name, extra_data, active) VALUES ('password', 'Password', ?, 1)",
          [passwordHash]
        );
      }
    });

    // Auto-login after setup
    const token = crypto.randomUUID();
    const expiresAt = Math.floor(Date.now() / 1000) + (24 * 60 * 60);
    db.mutate(
      'INSERT INTO actual.sessions (token, expires_at, user_id, auth_method) VALUES (?, ?, ?, ?)',
      [token, expiresAt, userId, 'password']
    );

    res.json({ status: 'ok', data: { token, userId, role: 'ADMIN' } });
  } catch (err) {
    console.error('[email-auth] Error in setup:', err.message);
    res.status(500).json({ status: 'error', reason: 'setup-failed', detail: err.message });
  }
});

// GET /email-auth/needs-setup - Check if first admin needs to be created
app.get('/needs-setup', (req, res) => {
  const db = getAccountDb();
  try {
    const existing = db.first('SELECT id FROM actual.email_credentials LIMIT 1');
    res.json({ status: 'ok', needsSetup: !existing });
  } catch (err) {
    console.error('[email-auth] needs-setup error:', err.message);
    // Se a tabela nao existe ainda, precisa de setup
    res.json({ status: 'ok', needsSetup: true });
  }
});

// ============ ADMIN ENDPOINTS ============

// GET /email-auth/users - List all users with email
app.get('/users', requireAdmin, (req, res) => {
  const db = getAccountDb();
  try {
    const users = db.all(`
      SELECT u.id, u.user_name, u.display_name, u.enabled, u.role,
             ec.email, ec.created_at
      FROM actual.users u
      LEFT JOIN actual.email_credentials ec ON ec.user_id = u.id
      WHERE u.user_name <> ''
    `);
    res.json({ status: 'ok', data: users });
  } catch (err) {
    console.error('[email-auth] list users error:', err.message);
    res.status(500).json({ status: 'error', reason: 'server-error' });
  }
});

// POST /email-auth/register - Admin registers a new user with email+password
app.post('/register', requireAdmin, (req, res) => {
  const { email, password, displayName, role } = req.body;

  if (!email || !password) {
    return res.status(400).json({ status: 'error', reason: 'email-and-password-required' });
  }

  if (password.length < 6) {
    return res.status(400).json({ status: 'error', reason: 'password-too-short' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ status: 'error', reason: 'invalid-email' });
  }

  const db = getAccountDb();

  try {
    // Check if email already exists
    const existing = db.first('SELECT id FROM actual.email_credentials WHERE email = ?', [email.toLowerCase()]);
    if (existing) {
      return res.status(400).json({ status: 'error', reason: 'email-already-exists' });
    }

    const userId = crypto.randomUUID();
    const credId = crypto.randomUUID();
    const passwordHash = bcrypt.hashSync(password, 12);
    const userRole = role || 'BASIC';

    db.transaction(() => {
      db.mutate(
        'INSERT INTO actual.users (id, user_name, display_name, enabled, owner, role) VALUES (?, ?, ?, 1, 0, ?)',
        [userId, email.toLowerCase(), displayName || email.split('@')[0], userRole]
      );
      db.mutate(
        'INSERT INTO actual.email_credentials (id, user_id, email, password_hash) VALUES (?, ?, ?, ?)',
        [credId, userId, email.toLowerCase(), passwordHash]
      );
    });

    res.json({ status: 'ok', data: { id: userId, email: email.toLowerCase() } });
  } catch (err) {
    console.error('[email-auth] Error registering user:', err.message);
    res.status(500).json({ status: 'error', reason: 'registration-failed', detail: err.message });
  }
});

// DELETE /email-auth/users/:id - Admin deletes a user
app.delete('/users/:id', requireAdmin, (req, res) => {
  const { id } = req.params;
  const db = getAccountDb();

  try {
    db.transaction(() => {
      db.mutate('DELETE FROM actual.email_credentials WHERE user_id = ?', [id]);
      db.mutate('DELETE FROM actual.sessions WHERE user_id = ?', [id]);
      db.mutate('DELETE FROM actual.user_access WHERE user_id = ?', [id]);
      db.mutate('DELETE FROM actual.users WHERE id = ? AND owner = 0', [id]);
    });
    res.json({ status: 'ok' });
  } catch (err) {
    console.error('[email-auth] Error deleting user:', err.message);
    res.status(500).json({ status: 'error', reason: 'delete-failed' });
  }
});

// PATCH /email-auth/users/:id - Admin updates user password/role/status
app.patch('/users/:id', requireAdmin, (req, res) => {
  const { id } = req.params;
  const { password, displayName, role, enabled } = req.body;
  const db = getAccountDb();

  try {
    if (password) {
      const passwordHash = bcrypt.hashSync(password, 12);
      db.mutate('UPDATE actual.email_credentials SET password_hash = ? WHERE user_id = ?', [passwordHash, id]);
    }
    if (displayName !== undefined) {
      db.mutate('UPDATE actual.users SET display_name = ? WHERE id = ?', [displayName, id]);
    }
    if (role !== undefined) {
      db.mutate('UPDATE actual.users SET role = ? WHERE id = ?', [role, id]);
    }
    if (enabled !== undefined) {
      db.mutate('UPDATE actual.users SET enabled = ? WHERE id = ?', [enabled ? 1 : 0, id]);
    }
    res.json({ status: 'ok' });
  } catch (err) {
    console.error('[email-auth] Error updating user:', err.message);
    res.status(500).json({ status: 'error', reason: 'update-failed' });
  }
});

// ============ LOGIN ENDPOINT ============

// POST /email-auth/login - Login with email+password
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ status: 'error', reason: 'email-and-password-required' });
  }

  const db = getAccountDb();

  try {
    const cred = db.first('SELECT * FROM actual.email_credentials WHERE email = ?', [email.toLowerCase()]);

    if (!cred) {
      console.log('[email-auth] Login failed: user not found -', email);
      return res.status(401).json({ status: 'error', reason: 'invalid-credentials' });
    }

    const valid = bcrypt.compareSync(password, cred.password_hash);
    if (!valid) {
      console.log('[email-auth] Login failed: wrong password -', email);
      return res.status(401).json({ status: 'error', reason: 'invalid-credentials' });
    }

    // Check if user is enabled
    const user = db.first('SELECT * FROM actual.users WHERE id = ?', [cred.user_id]);
    if (!user || !user.enabled) {
      return res.status(401).json({ status: 'error', reason: 'user-disabled' });
    }

    // Create session (24 hours)
    const token = crypto.randomUUID();
    const expiresAt = Math.floor(Date.now() / 1000) + (24 * 60 * 60);

    db.mutate(
      'INSERT INTO actual.sessions (token, expires_at, user_id, auth_method) VALUES (?, ?, ?, ?)',
      [token, expiresAt, cred.user_id, 'password']
    );

    console.log('[email-auth] Login successful:', email, '- role:', user.role);

    res.json({
      status: 'ok',
      data: {
        token,
        userId: cred.user_id,
        displayName: user.display_name,
        role: user.role,
      }
    });
  } catch (err) {
    console.error('[email-auth] Login error:', err.message);
    res.status(500).json({ status: 'error', reason: 'server-error', detail: err.message });
  }
});
