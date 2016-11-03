/**
 * Created by Emanuel Chalela on 2/11/2016.
 */
var AlteracionEnum{
    SOSTENIDO: "#",
    DOBLE_SOSTENIDO: "##",
    BEMOL: "@",
    DOBLE_BEMOL: "@@",
    BECUADRO: "n"
};

    var alteracion;

    function AlteracionEnum(alteracion) {
        this.alteracion = alteracion;
    }

    function getDiv() {
        return alteracion;
    }

    function setDiv(String div) {
        this.alteracion = div;
    }
