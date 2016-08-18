/**
 * Created by nachogarrone on 17/8/16.
 */
var Parser = require("jison").Parser;

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

var parser = new Parser(grammar);

// generate source, ready to be written to disk
var parserSource = parser.generate();

console.log('Parsing...');
console.log(parser.parse("adfe34bc e82a"));
