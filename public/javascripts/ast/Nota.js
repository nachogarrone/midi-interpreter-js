/**
 * Created by Emanuel Chalela on 2/11/2016.
 */
    var notas;
    var octava;
    var valor;

    function Nota(notas, octava, valor) {
    this.notas = notas;
    this.octava = octava;
    this.valor = valor;
}

function unparse() {
    var figura = "";
    switch (valor) {
        case "w":
            figura = " Redonda";
        case "h":
            figura = " Blanca";
        case "q":
            figura = " Negra";
        case "8":
            figura = " Corchea";
        case "16":
            figura = " Semi-corchea";
        case "32":
            figura = " Fusa";
        case "64":
            figura = " Semi-fusa";
    }
    return "";
}

function semanticCheck(state) {
    // TODO Auto-generated method stub
    return null;
}

function compileMIDI(state, track){
    var valorNota = 0.0;
    switch (valor) {
        case "w":
            valorNota = 4.0;
            break;
        case "h":
            valorNota = 2.0;
            break;
        case "q":
            valorNota = 1.0;
            break;
        case "8":
            valorNota = 1.0 / 2;
            break;
        case "16":
            valorNota = 1.0 / 4;
            break;
        case "32":
            valorNota = 1.0 / 8;
            break;
        case "64":
            valorNota = 1.0 / 16;
            break;
    }

    var tiempoNegraSegundo = state.variablesPartitura.get("bpm") / 60;
    var startick = 0.0;
    notas.forEach(function () {
        var valorFigura = 0.0;
        if (nodoNota.nombreNota.equals(NotaEnum.LA)) {
            valorFigura = 0.0;
        } else if (nodoNota.nombreNota.equals(NotaEnum.SI)) {
            valorFigura = 2.0;
        } else if (nodoNota.nombreNota.equals(NotaEnum.DO)) {
            valorFigura = 4.0;
        } else if (nodoNota.nombreNota.equals(NotaEnum.RE)) {
            valorFigura = 6.0;
        } else if (nodoNota.nombreNota.equals(NotaEnum.MI)) {
            valorFigura = 8.0;
        } else if (nodoNota.nombreNota.equals(NotaEnum.FA)) {
            valorFigura = 10.0;
        } else if (nodoNota.nombreNota.equals(NotaEnum.SOL)) {
            valorFigura = 12.0;
        }
        var valorAlteracion = 0.0;
        if (nodoNota.alteracion != null) {
            if (nodoNota.alteracion.equals(AlteracionEnum.SOSTENIDO)) {
                valorAlteracion = 1.0;
            } else if (nodoNota.alteracion.equals(AlteracionEnum.DOBLE_SOSTENIDO)) {
                valorAlteracion = 2.0;
            } else if (nodoNota.alteracion.equals(AlteracionEnum.BEMOL)) {
                valorAlteracion = -1.0;
            } else if (nodoNota.alteracion.equals(AlteracionEnum.DOBLE_BEMOL)) {
                valorAlteracion = -2.0;
            } else if (nodoNota.alteracion.equals(AlteracionEnum.BECUADRO)) {
                valorAlteracion = 0.0;
            }

        }
        var tickLength = tiempoNegraSegundo * valorNota;
        var data1 = valorFigura + valorAlteracion + 12 * octava;
        addNote(track, startick, tickLength, data1);
    });

    return state;
}

function toString() {
    return "Nota [notas=" + notas.toString() + ", octava=" + octava + ", valor=" + valor + "]";
}

function hashCode() {
    var prime = 31;
    var result = 1;
    result = prime * result + Arrays.hashCode(notas);
    result = prime * result + ((octava == null) ? 0 : octava.hashCode());
    result = prime * result + ((valor == null) ? 0 : valor.hashCode());
    return result;
}

function equals(obj) {
    if (this == obj)
        return true;
    if (obj == null)
        return false;
    if (typeof (this) != typeof (obj))
        return false;
    var other = obj;
    if (other instanceof Nota){
        if (!notas.equals(other.notas))
            return false;
        if (octava == null) {
            if (other.octava != null)
                return false;
        } else if (!octava.equals(other.octava))
            return false;
        if (valor == null) {
            if (other.valor != null)
                return false;
        } else if (!valor.equals(other.valor))
            return false;
        return true;
    }
    return false;
}

function addNote(track, startTick, tickLength, key){
    var on = new ShortMessage();
    on.setMessage(ShortMessage.NOTE_ON, 0, key, 64);
    var off = new ShortMessage();
    off.setMessage(ShortMessage.NOTE_OFF, 0, key, 64);
    track.add(new MidiEvent(on, startTick));
    track.add(new MidiEvent(off, startTick + tickLength));
}
