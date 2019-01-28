const assert = require('assert');

exports.grammar = {
    verb: Symbol('verb'),
    adverb: Symbol('adverb'),
    adjective: Symbol('adjective'),
    noun: Symbol('noun')
};

class Substitution {
    constructor(text, type) {
        this.text = text;
        this.type = type;
    }
}

// Perform a substitution into the passed string.
// The string is of the following format: 'Now ${adverb} is the ${noun}'. A ${...} represents a part of
// speech that should be replaced using the passed argument.
// Arguments must be instances of class Substitution.
// This function finds the first occurrence of the argument's Symbol value and substitutes
// its string value into the array.
exports.findAndReplace = (input, sub) => {
    assert(sub instanceof Substitution);
    const regexp = new RegExp("\\$\\{" + sub.type.description + "\\}");
    const arr = input.split(/\s+/g);
    const index = arr.findIndex(el =>
        null !== el.match(regexp))
    if(-1 !== index)
        arr[index] = sub.text;

    return arr.join(' ');
};

exports.generateWordSalad = () => {
    
};
