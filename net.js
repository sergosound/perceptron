class Net {
    constructor(input, output) {
        this.input = input || {};
        this.output = output || {};
    }

    update(property, value) {
        if (!['input', 'output'].includes(property)) {
            throw new Error('Unresolved property in Net');
        }

        this[property] = value;
    }
}

module.exports = Net;