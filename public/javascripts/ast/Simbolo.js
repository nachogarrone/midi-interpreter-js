/**
 * Created by Emanuel Chalela on 2/11/2016.
 */
function unparse(){}

function semanticCheck(state){}

function compileMIDI(state, track){}

function toString(){}

function hashCode(){}

function equals(obj){}

function generate(random, min, max) {
    var TERMINAL_COUNT = 1;
    var NONTERMINAL_COUNT = 4;
    var i = Math.random(TERMINAL_COUNT + NONTERMINAL_COUNT);
    switch (i) {
        // Terminals
        case 0:
            return Silencio.generate(random, min - 1, max - 1);
        // Non terminals
        case 1:
            return Nota.generate(random, min - 1, max - 1);

//		case 4:
//			return ListaCompas.generate(random, min - 1, max - 1);
        default:
            throw new Error("Unexpected error at Stmt.generate()!");
    }
}