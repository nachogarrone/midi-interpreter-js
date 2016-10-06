/**
 * Created by Emanuel Chalela on 5/10/2016.
 */

var Parser = require("jison").Parser;

var grammar = {
    "lex": {
        "rules": [
            ["=", "return 'IGUAL';"],
            ["time", "return 'TIME';"],
            ["bpm", "return 'BPM';"],
            ["r", "return 'SILENCIO';"],
            ["-", "return 'GUION';"],
            ["/", "return 'BARRA';"],
            ["|", "return 'SIMPLE';"],
            ["||", "return 'FIN';"],
            ["|:", "return 'INICIO_REPETICION';"],
            [":|", "return 'FIN_REPETICION';"],
            ["[A-G]", "return 'NOTA';"],
            ["[1-8]", "return 'OCTAVA';"],-
            ["2\/4|3\/4|4\/4|C", "return 'VALOR_COMPAS';"],
            ["[0-9]+", "return 'NUM';"],
            ["w|h|q|8|16|32|64", "return 'VALOR';"],
            ["\#{1,2}|\@{1,2}|n", "return 'ALTERACION';"],
            ["[\t\r\n\f\v]+", "/* ignore */"]
        ]
    },

    "bnf": {
        "partitura" :[ "partitura HEX",
            "HEX" ]
    }
};


/*

 \#{1,2}|\@{1,2}|n
 { String $1 = yytext(); String $0;
 $0 = $1;
 return new Symbol(ALTERACION, yyline, yycolumn, $0); }
 [ \t\r\n\f\v]+
 { /* Ignore */ }

*/

var parser = new Parser(grammar);

// generate source, ready to be written to disk
var parserSource = parser.generate();

// you can also use the parser directly from memory

parser.parse("adfe34bc e82a");
// returns true

parser.parse("adfe34bc zxg");
// throws lexical error
