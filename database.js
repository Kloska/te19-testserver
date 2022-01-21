const mysql = require('mysql2');

const pool = mysql.createPool({
    connectionLimit: 10,
    charset: 'utf8mb4',
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE,
});

module.exports = pool;