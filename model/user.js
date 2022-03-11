const async = require('hbs/lib/async');
const dbConnPool = require('./db');

let Users = {};

Users.getUsers = async () => {
    let result = {};
    let dbConn = await dbConnPool.getConnection();
    const rows = await dbConn.query("SELECT userId,username,`first` FROM user ");
    dbConn.end();

    if (rows.length > 0) {
        result.status = true;
        result.rows = rows;
    } else {
        result.status = false;
    }
    return result;
};
module.exports = Users;

Users.getUsers = async (userId) => {
    
    let result = {};
    let dbConn = await db.getConnection();
    const rows = await dbConn.query("SELECT userId,username,`first` FROM user WHERE userId =?", [userId]);
    dbConn.end();

    if (rows.length > 0) {
        result.status = true;
        result.rows = rows;
    } else {
        result.status = false;
    }
    return result;
};

