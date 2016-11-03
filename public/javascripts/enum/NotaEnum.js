/**
 * Created by Emanuel Chalela on 2/11/2016.
 */
var NotaEnum = {
    DO: "C",
    RE: "D",
    MI: "E",
    FA: "F",
    SOL: "G",
    LA: "A",
    SI: "B"
};
    var nota;

function NotaEnum(nota) {
        this.nota = nota;
    }

    function getNota() {
        return nota;
    }

    function setNota(String nota) {
        this.nota = nota;
    }
