const NeuronBase = require('../base/neuron');

class InputNeuron extends NeuronBase {
    constructor(chords, value, correctValue) {
        super();
        this.chords = chords;
        this.value = value;
    }
}

module.exports = InputNeuron;