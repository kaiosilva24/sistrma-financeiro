import { join, resolve } from 'node:path';
import { config } from '../load-config.js';
const ID_REGEX = /^[a-zA-Z0-9_-]+$/;
export function isValidFileId(id) {
    return ID_REGEX.test(id);
}
export function getPathForUserFile(fileId) {
    return join(resolve(config.get('userFiles')), `file-${fileId}.blob`);
}
export function getPathForGroupFile(groupId) {
    return join(resolve(config.get('userFiles')), `group-${groupId}.sqlite`);
}
