import { readdir } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { load } from 'migrate';
import { config } from './load-config.js';
export async function run(direction = 'up') {
    console.log(`Checking if there are any migrations to run for direction "${direction}"...`);
    const __dirname = dirname(fileURLToPath(import.meta.url)); // this directory
    const migrationsDir = path.join(__dirname, '../migrations');
    try {
        // Load all script files in the migrations directory
        const files = await readdir(migrationsDir);
        const migrationsModules = {};
        for (const f of files
            .filter(f => (f.endsWith('.js') || f.endsWith('.ts')) && !f.endsWith('.d.ts'))
            .sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))) {
            migrationsModules[f] = await import(pathToFileURL(path.join(migrationsDir, f)).href);
        }
        return new Promise((resolve, reject) => {
            load({
                stateStore: `${path.join(config.get('dataDir'), '.migrate')}${config.get('mode') === 'test' ? '-test' : ''}`,
                migrations: migrationsModules,
            }, (err, set) => {
                if (err)
                    return reject(err);
                set[direction](err => {
                    if (err)
                        return reject(err);
                    console.log('Migrations: DONE');
                    resolve();
                });
            });
        });
    }
    catch (err) {
        console.error('Error during migration process:', err);
        throw err;
    }
}
