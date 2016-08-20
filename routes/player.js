var express = require('express');
var Parser = require("jison").Parser;

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('player', { title: 'Midi JS Player' });
});

router.post('/', function (req, res) {
    var parseResult = parser(req.body.source);
    res.render('player', { title: 'Midi JS Player', parseResult: parseResult });
});

var grammar = {
    "lex": {
        "rules": [
            ["\\s+", "/* skip whitespace */"],
            ["[a-f0-9]+", "return 'HEX';"]
        ]
    },

    "bnf": {
        "hex_strings" :[ "hex_strings HEX",
            "HEX" ]
    }
};

function parser(source) {
    if(source){
        var parser = new Parser(grammar);

        console.log('Parsing...');
        var ret = parser.parse(source);
        console.log(ret);
        return ret;
    }
}

module.exports = router;
