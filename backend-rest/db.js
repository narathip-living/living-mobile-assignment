const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    database: 'store_database',
    host: 'localhost',
    post: 5432
})

module.exports = pool;