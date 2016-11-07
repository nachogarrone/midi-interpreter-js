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
    "operators": [],
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
            "ALTERACION" ],
        "partitura" :[[ "partitura PARTITURA",
            "PARTITURA"],["BPM IGUAL NUM TIME IGUAL VALOR_COMPAS LISTA_COMPAS FIN", "$$ = PARTITURA($7(COMPAS($7.length())),$6,$3)"]],
        "nodoNota" :[[ "nodoNota NODONOTA",
            "NODONOTA"],["NOTA", "$$ = $1"],["NOTA ALTERACION","$$ = $1,$2"]],
        "simbolo" :[[ "simbolo SIMBOLO",
            "SIMBOLO"],["rnota BARRA OCTAVA BARRA VALOR", "$$ = NOTA($1(NODONOTA($1.length())),$3,$5);"],["SILENCIO BARRA VALOR","$$ = SILENCIO($3);"]],
        "compas" :[[ "compas COMPAS",
            "COMPAS"],["SIMBOLOS_COMPAS", "$$ = COMPAS($2(SIMBOLO($2.length())));"]],
        "rnota" :[["nodoNota LISTA_NODO_NOTAS","$$ = LISTA_NODO_NOTA.push($1)"],["rnota GUION nodoNota LISTA_NODO_NOTAS","$$ = $1.push($3);$4=$1"]],
        "simbolo_compas" :[["simbolo","$$ = simbolo.push($1);return simbolo;"],["simbolo_compas simbolo","$$ = $1.push($2);"]],
        "listaCompas" :[["compas","$$ = compas.push($1);return compas;"],["listaCompas SIMPLE compas","$$ = $1.push($2);"],["INICIO_REPETICION listaCompas FIN_REPETICION","$$ = $1.push($2);"]]



        /*
         partitura ::= BPM:$1 IGUAL:$2 NUM:$3 TIME:$4 IGUAL:$5 VALOR_COMPAS:$6 listaCompas:$0 FIN:$7
         {: RESULT = new  Partitura($0.toArray(new Compas[$0.size()]),$6,$3); :};
         */

        /*
         repeat$nota ::=
         nodoNota:$1
         {: List<NodoNota> $0;
         $0 = new ArrayList<NodoNota>();
         $0.add($1);
         RESULT = $0; :}
         |	repeat$nota:$1 GUION:$3 nodoNota:$2
         {: List<NodoNota> $0;
         $1.add($2); $0 = $1;
         RESULT = $0; :}
        */
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
