/**
 * Created by Emanuel Chalela on 2/11/2016.
 */
var statements;
function Compas(statements) {
    this.statements = statements;
}

function unparse() {
    var result = "{ ";
    statements.forEach(function (item) {
        result += item.unparse() + " ";
    });
    return result + "}";
}

function compileMIDI(state, track){
    statements.forEach(function () {
        compileMIDI(state, track);
    });
    state.variablesState.clear();
    return state;
}

function semanticCheck(state) {
    var sumavalorSimbolosCompas = 0;
    var aux = null;
    statements.forEach(function () {
       var valorSimbolo = 0;
        if (simbolo instanceof Nota) {
            switch (simbolo.valor) {
            case "w":
                valorSimbolo = 4.0;
            case "h":
                valorSimbolo = 2.0;
            case "q":
                valorSimbolo = 1.0;
            case "8":
                valorSimbolo = 1.0 / 2;
            case "16":
                valorSimbolo = 1.0 / 4;
            case "32":
                valorSimbolo = 1.0 / 8;
            case "64":
                valorSimbolo = 1.0 / 16;
            }
            } else if (simbolo instanceof Silencio) {
            switch (simbolo.valor) {
            case "w":
                valorSimbolo = 4.0;
            case "h":
                valorSimbolo = 2.0;
            case "q":
                valorSimbolo = 1.0;
            case "8":
                valorSimbolo = 1.0 / 2;
            case "16":
                valorSimbolo = 1.0 / 4;
            case "32":
                valorSimbolo = 1.0 / 8;
            case "64":
                valorSimbolo = 1.0 / 16;
            }
            }
        sumavalorSimbolosCompas = +valorSimbolo;
    });
    if (!state.variablesPartitura.get("time").equals(sumavalorSimbolosCompas)) {
        state.errores.add(
            "el valor de las notas de un compas no son equivalentes al time correspondiente de la partitura.");
    }
    return state;
}

function toString() {
    return "Compas [statements=" + statements.toString() + "]";
}

function hashCode() {
    var prime = 31;
    var result = 1;
    result = prime * result + statements.hashCode();
    return result;
}

function equals(obj) {
    if (this == obj)
        return true;
    if (obj == null)
        return false;
    if (getClass() != obj.getClass())
        return false;
    var other = obj;
    if (!Arrays.equals(statements, other.statements))
        return false;
    return true;
}