var express = require('express');
const async = require('hbs/lib/async');
var router = express.Router();

const pageModel = require('../model/page');

/* GET home page. */
router.get('/', async function(req, res, next) {

  let result = await pageModel.getPages();
  res.render('pages', { title: 'LPP\'s example of lab 4', pages: result });


  // res.render('index', { title: 'LPP\'s example of lab 4' });
});

module.exports = router;
