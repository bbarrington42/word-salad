const assert = require('assert');
const subs = require('./subs');

const adj = Symbol.for('adjective');

exports.grammar = {
    verb: Symbol.for('verb'),
    adverb: Symbol.for('adverb'),
    adjective: Symbol.for('adjective'),
    noun: Symbol.for('noun')
};

exports.Substitution = class Substitution {
    constructor(text, type) {
        this.text = text;
        this.type = type;
    }
};

// Perform a substitution into the passed string.
// The string is of the following format: 'Now ${adverb} is the ${noun}'. A ${...} represents a part of
// speech that should be replaced using the passed argument.
// Arguments must be instances of class Substitution.
// This function finds the first occurrence of the argument's Symbol value and substitutes
// its string value into the array.
exports.findAndReplace = (input, sub) => {
    assert(sub instanceof this.Substitution);
    const regexp = new RegExp("\\$\\{" + sub.type.description + "\\}");
    const arr = input.split(/\s+/g);
    const index = arr.findIndex(el =>
        null !== el.match(regexp))
    if(-1 !== index)
        arr[index] = sub.text;

    return arr.join(' ');
};

exports.generateWordSalad = () => {
    // Get a template
    const templ = subs.template();

    const re = /\$\{([^}]+)\}/g;

    // Find all the placeholders
    const placeholders = templ.match(re);
        //re.exec(templ);

    console.log(placeholders);
};


this.generateWordSalad();
