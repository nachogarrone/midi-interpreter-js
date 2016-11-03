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
