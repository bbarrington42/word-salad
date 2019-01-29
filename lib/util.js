const assert = require('assert');
const subs = require('./subs');

exports.grammar = {
    verb: Symbol.for('verb'),
    adverb: Symbol.for('adverb'),
    adjective: Symbol.for('adjective'),
    noun: Symbol.for('noun')
};


exports.generateWordSalad = () => {
    let acc = [];
    // Get a template
    const templ = subs.template();
    console.log(`Selected template: ${templ}`);
    // Split on whitespace and form an array of arrays of words with indices
    const arr = [...templ.split(/\s+/).entries()];
    // Examine each entry for placeholders
    const re = /\$\{([^}]+)\}/;

    arr.forEach(a => {
        const [i, w] = a;
        const m = w.match(re);
        // If not null, the second element of the match will be the text between '${' and '}'
        if(null !== m) {
            console.log(`m: ${m}`);
            const symb = Symbol.for(m[1]);
            let val = subs.substitution(symb);
            console.log(`Found substitute: ${val}`);
            // Special check so we don't erase periods
            if(m.input !== m[0]) {
                const r = m.input.split(m[0]);
                val = r[0] + val + r[1];
            }
            console.log(`Substitution: ${val}`);
            acc.push(val);

        } else acc.push(w);
    });

    const rv = acc.join(' ');
    console.log(`Salad: ${rv}`);

    return rv;
};


