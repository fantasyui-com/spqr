var express = require('express');
var database = require('../database/index.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  let {startAt, cards} = database({startAt:parseInt(req.query.startAt)||0});

  let nextAt = startAt+3;
  let returnTo = startAt-3;
  if(returnTo<0) returnTo = 0;

  res.render('index', { title: 'Feed', cards, nextAt,returnTo });

});

module.exports = router;
