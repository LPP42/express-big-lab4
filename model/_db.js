const mariadb = require('mariadb');

const pool = mariadb.createPool({
    "host": "dbhost",
    "user": "user",
    "password": "password",
    "database": "db",
    "connectionLimit": "5"
});

module.exports = pool;