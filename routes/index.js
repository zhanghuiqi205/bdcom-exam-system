var express = require('express');
var router = express.Router();
var fs = require('fs');
var file ="../data/db.json";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
