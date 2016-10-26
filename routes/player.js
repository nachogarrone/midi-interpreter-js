var express = require('express');
var Parser = require("jison").Parser;
var path = require("path");
//Require MIDIPlayer and MIDIFile modules
var MIDIPlayer = require('midiplayer');
var MIDIFile = require('midifile');
var fs = require('fs');

var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('player', {title: 'Midi JS Player'});
});

router.post('/', function (req, res) {
    var parseResult = parser(req.body.source);
    res.render('player', {title: 'Midi JS Player', parseResult: parseResult});
});

var grammar = {
    "lex": {
        "rules": [
            ["\\s+", "/* skip whitespace */"],
            ["[a-f0-9]+", "return 'HEX';"]
        ]
    },

    "bnf": {
        "hex_strings": ["hex_strings HEX",
            "HEX"]
    }
};

function parser(source) {
    if (source) {
        var parser = new Parser(grammar);

        var ret = parser.parse(source);
        console.log(ret);


        // MIDI OUTPUT
        var data = fs.readFileSync('/Applications/XAMPP/xamppfiles/htdocs/midi-interpreter-js/routes/mozart.mid');
        console.log(data);


        return data;
    }
}

module.exports = router;
