import crypto from 'crypto';
export function sha256String(str) {
    return crypto.createHash('sha256').update(str).digest('base64');
}
