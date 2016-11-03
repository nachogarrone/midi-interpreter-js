/**
 * Created by Emanuel Chalela on 2/11/2016.
 */
    var nombreNota;
    var alteracion;

    function NodoNota(nombreNota) {
    this.nombreNota = nombreNota;
    }

function NodoNota(nombreNota, alteracion) {
    this.nombreNota = nombreNota;
    this.alteracion = alteracion;
}

function unparse() {
    switch (nombreNota) {
        case "A":
            return "La";
        case "B":
            return "Si";
        case "C":
            return "Do";
        case "D":
            return "Re";
        case "E":
            return "Mi";
        case "F":
            return "Fa";
        case "G":
            return "Sol";
    }
    return null;
}

function toString() {
    return "NodoNota [nombreNota=" + nombreNota + ", alteracion=" + alteracion + "]";
}

function hashCode() {
    var prime = 31;
    var result = 1;
    result = prime * result + ((alteracion == null) ? 0 : alteracion.hashCode());
    result = prime * result + ((nombreNota == null) ? 0 : nombreNota.hashCode());
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
    if (alteracion == null) {
        if (other.alteracion != null)
            return false;
    } else if (!alteracion.equals(other.alteracion))
        return false;
    if (nombreNota == null) {
        if (other.nombreNota != null)
            return false;
    } else if (!nombreNota.equals(other.nombreNota))
        return false;
    return true;
}

