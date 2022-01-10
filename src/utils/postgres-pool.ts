import {Pool} from 'pg';

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'bunny_rest',
    password: 'root_dev_password',
    port: 5432
});

export default pool;
