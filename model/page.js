const dbConnPool = require('./db');

let Pages = {};
//gets all pages
Pages.getPages = async() => {
    let result = {};
    let dbConn = await dbConnPool.getConnection();
    const rows = await dbConn.query("SELECT pageId,`name`,content FROM page");
    dbConn.end();

    if (rows.length > 0) {
        result.status = true;
        result.data = rows;
    } else {
        result.status = false;
    }

    return result;
};

//gets the specified page
Pages.getPage = async(pageId) => {

    let result = {};
    if (isNaN(pageId)) {
        result.status = false;
    } else {
        let dbConn = await dbConnPool.getConnection();
        const rows = await dbConn.query("SELECT pageId,`name`,content FROM page WHERE pageId = ?", [pageId]);
        dbConn.end();

        if (rows.length > 0) {
            result.status = true;
            result.data = rows[0];
        } else {
            result.status = false;
        }
    }
    return result;
};

module.exports = Pages;