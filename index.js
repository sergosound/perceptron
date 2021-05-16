const sevenMatrix = require('./matrix/7');
const analyzedMatrix = require('./snapshots/7.1');

const Net = require('./net');
const Weight = require('./connections/weigth');
const iNeuron = require('./neurons/input');
const oNeuron = require('./neurons/output');

const net = new Net();

function fillingInputNeurons(matrix, inputNeuron, resultObject) {
    const { rows, cols } = matrix.parameters;
    const length = (rows * cols) - 1;
    for (let idx = 0; idx < length; idx++) {
        resultObject[idx] = new inputNeuron(idx, Number(Math.random().toFixed(1)))
    }
}

function fillingOutputNeurons(matrix, neuron, resultObject) {
    const { matrix: matrixAnalysis } = matrix;
    for (let idx = 0; idx < matrixAnalysis.length; idx++) {
        resultObject[idx] = new neuron(idx, undefined, matrixAnalysis[idx]);
    }
}

function analyzeTheMatrix(matrix, outputNeuron, resultObject) {

}

function initialization() {
    fillingInputNeurons(analyzedMatrix, iNeuron, net.input);
    fillingOutputNeurons(sevenMatrix, oNeuron, net.output);
}

initialization(sevenMatrix, oNeuron, net.output);
analyzeTheMatrix(analyzedMatrix, iNeuron, net.input);

console.log(net);