/**
 * Created by Emanuel Chalela on 2/11/2016.
 */
var BarraDivisoriaEnum {
    SIMPLE: "|",
    FIN: "||",
    INICIO_REPETICION: "|:",
    FIN_REPETICION:":|"
};

    var div;

    function BarraDivisoriaEnum(div) {
        this.div = div;
    }

    function getDiv() {
        return div;
    }

    function setDiv(div) {
        this.div = div;
    }