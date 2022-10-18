import pg from 'pg';
import keys from "../config";

const { Pool } = pg;

const pool = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort
});

export default pool;