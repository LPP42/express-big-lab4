const express = require('express');
const router = express.Router();
const pageModel = require('../model/page');


/* GET pages listing. */
router.get('/', async function(req, res) {
    let result = await pageModel.getPages();
    res.render('pages', { title: "All pages", pages: result });
});
router.get('/:pageId', async function(req, res) {

    let pageId = parseInt(req.params.pageId.trim());
    let result = await pageModel.getPage(pageId);
    //console.log(result);
    res.send(result);
});


module.exports = router;