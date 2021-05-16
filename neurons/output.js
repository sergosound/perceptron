const NeuronBase = require('../base/neuron');

class OutputNeuron extends NeuronBase {
    constructor(chords, value, correctValue) {
        super();
        this.chords = chords;
        this.value = value;
        this.correctValue = correctValue;
    }

    get(property) {
        return this[property];
    }
}

module.exports = OutputNeuron;