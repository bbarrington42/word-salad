const assert = require('assert');
const subs = require('./subs');

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
    let rv = [];
    // Get a template
    const templ = subs.template();
    // Split on whitespace and form an array of arrays of words with indices
    const arr = [...templ.split(/\s+/).entries()];
    // Examine each entry for placeholders
    const re = /\$\{([^}]+)\}/;

    arr.forEach(a => {
        const [i, w] = a;
        const m = w.match(re);
        // If not null, the second element of the match will be the text between '${' and '}'
        if(null !== m) {
            const symb = Symbol.for(m[1]);
            let val = subs.substitution(symb);
            // Special check so we don't erase periods
            if(m.input !== m[0]) {
                const r = m.input.split(m[0]);
                val = r[0] + val + r[1];
            }
            rv.push(val);

        } else rv.push(w);
    });

    return rv.join(' ');
};


