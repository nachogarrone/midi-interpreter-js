/**
 * Created by Emanuel Chalela on 2/11/2016.
 */
    var variablesPartitura = {};
    var variablesState = {};
    var errores = {};

    function State(variablesPartitura, variablesState, errores){
        this.variablesPartitura = variablesPartitura;
        this.variablesState = variablesState;
        this.errores = errores;
    }

    function toString() {
        return "State [variablesPartitura=" + variablesPartitura.toString() + ", variablesState=" + variablesState.toString() + "]";
    }

    Array.prototype.equals = function (array) {
    if (!array)
        return false;

    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        if (this[i] instanceof Array && array[i] instanceof Array) {
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            return false;
        }
    }
    return true;
    }
