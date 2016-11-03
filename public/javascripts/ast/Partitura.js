/**
 * Created by Emanuel Chalela on 31/10/2016.
 */
    var compases;
    var time;
    var bpm;

    function Partitura(compases, time, bpm) {
    this.compases = compases;
    this.time = time;
    this.bpm = bpm;
    }

function unparse() {
    // TODO Auto-generated method stub
    return null;
}

function semanticCheck(state) {
    state.variablesPartitura.put("bpm", bpm);
    var valorCompas = 0.0;
    if (time.equals(TimeEnum.CUATRO_CUARTO) || time.equals(TimeEnum.C)) {
        valorCompas = 4.0;
    } else if (time.equals(TimeEnum.TRES_CUARTO)) {
        valorCompas = 3.0;
    } else if (time.equals(TimeEnum.DOS_CUARTO)) {
        valorCompas = 2.0;
    }
    state.variablesPartitura.put("bpm", bpm);
    state.variablesPartitura.put("time", valorCompas);
    // TODO Auto-generated method stub
    return state;
}

function compileMIDI(state, fileMidi){
    var seq = new Sequence(Sequence.PPQ, 4);
    var track = seq.createTrack();
    state.variablesPartitura.put("bpm", bpm);
    compases.forEach(function () {
        compileMIDI(state, track);
    });
    MidiSystem.write(seq, 1, fileMidi);
    return state;
}

function toString() {
    return "Partitura [compases=" + compases.toString() + ", time=" + time + ", bpm=" + bpm + "]";
}

function hashCode() {
    // TODO Auto-generated method stub
    return 0;
}

function equals(obj) {
    // TODO Auto-generated method stub
    return false;
}




