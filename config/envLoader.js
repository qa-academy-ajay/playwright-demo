import { resolve } from 'path';
import { config } from 'dotenv';

function loadEnv() {
    const envName = process.env.ENV || 'qa';
    const envPath = resolve(__dirname,`./env/${envName}.env`);
    config({ path: envPath });
    console.log(`Running tests on environment: ${envName}`);
}

export default { loadEnv };