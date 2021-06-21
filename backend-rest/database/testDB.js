const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres_test',
    password: 'postgres',
    database: 'test_database',
    host: 'localhost',
    post: 5432
})

module.exports = pool;