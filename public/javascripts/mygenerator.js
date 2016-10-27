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
        "signo_igual" :[ "signo_igual IGUAL",
            "IGUAL" ],
        "time" :[ "time TIME",
            "TIME" ],
        "bpm" :[ "bpm BPM",
            "BPM" ],
        "silencio" :[ "silencio SILENCIO",
            "SILENCIO" ],
        "guion" :[ "guion GUION",
            "GUION" ],
        "barra" :[ "barra BARRA",
            "BARRA" ],
        "simple" :[ "simple SIMPLE",
            "SIMPLE" ],
        "fin" :[ "fin FIN",
            "FIN" ],
        "inicio_repeticion" :[ "inicio_repeticion INICIO_REPETICION",
            "INICIO_REPETICION" ],
        "fin_repeticion" :[ "fin_repeticion FIN_REPETICION",
            "FIN_REPETICION" ],
        "nota" :[ "nota NOTA",
            "NOTA" ],
        "octava" :[ "octava OCTAVA",
            "OCTAVA" ],
        "valor_compas" :[ "valor_compas VALOR_COMPAS",
            "VALOR_COMPAS" ],
        "numero" :[ "numero NUM",
            "NUM" ],
        "valor" :[ "valor VALOR",
            "VALOR" ],
        "alteracion" :[ "alteracion ALTERACION",
            "ALTERACION" ]
    }
};



var parser = new Parser(grammar);

// generate source, ready to be written to disk
var parserSource = parser.generate();

// you can also use the parser directly from memory

parser.parse("adfe34bc e82a");
// returns true

parser.parse("adfe34bc zxg");
// throws lexical error
