var express = require('express');
var midigenerator = require('jison');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Midi Interpreter JS' });
});

module.exports = router;
