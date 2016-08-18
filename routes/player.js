var express = require('express');
// var midigenerator = require('midi-generator');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('player', { title: 'Midi JS Player' });
});

module.exports = router;
