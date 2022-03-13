const express = require('express');
const router = express.Router();
const pageModel = require('../model/page');


/* GET pages listing. */
router.get('/', async function(req, res) {
    let result = await pageModel.getPages();
    res.render('menu', { title: "All pages", pages: result });
});

//Get specified page
router.get('/:pageId', async function(req, res) {
    let pageId = parseInt(req.params.pageId.trim());
    let result = await pageModel.getPage(pageId);
    //console.log(result);
    // res.send(result);
    res.render('specifiedPage', { title: "Specified page", pages: result });
});


module.exports = router;