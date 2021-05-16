const WeightBase = require('../base/weight');

class Weight extends WeightBase {
    constructor(weight) {
        super();
        this.weight = weight;
    }
}

module.exports = Weight;