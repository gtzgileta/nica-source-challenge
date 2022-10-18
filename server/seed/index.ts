import fs from 'fs';
import { Pool } from 'pg';
import keys from '../config';
import * as dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort
});

const seedQuery = fs.readFileSync('./seed/seeds.sql', { encoding: 'utf8' });
pool.query(seedQuery, (err, res) => {
  console.log(err, res);
  console.log('Seeding Completed!');
  pool.end();
});
