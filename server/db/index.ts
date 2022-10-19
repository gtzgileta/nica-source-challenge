import pg from 'pg';
const Sequelize = require('sequelize')
import keys from "../config";

const { Pool } = pg;

const pool = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort
});

export const sequelize = new Sequelize(keys.pgDatabase, keys.pgUser, keys.pgPassword, {
    host: keys.pgHost,
    dialect: 'postgres'
});  

sequelize.authenticate()
.then(() => {
    console.log('Connected to DB...')
})
.catch(err => {
    console.log('Couldnt connect to DB..')
})

export default pool;