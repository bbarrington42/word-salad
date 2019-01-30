const subs = require('./subs');

exports.grammar = {
    verb: Symbol.for('verb'),
    adverb: Symbol.for('adverb'),
    adjective: Symbol.for('adjective'),
    noun: Symbol.for('noun')
};

// Separate function for testing
exports.makeSubs = (templs, subts) => {

    let acc = [];

    // Get a template
    const templ = subs.template(templs);
    console.log(`Selected template: ${templ}`);

    // Split on whitespace and get an array
    const arr = templ.split(/\s+/);
    // Examine each entry for placeholders
    const re = /\$\{([^}]+)\}/;

    arr.forEach(w => {
        const m = w.match(re);
        // If not null, the second element of the match will be the text between '${' and '}'
        if(null !== m) {
            console.log(`m: ${m}`);
            const symb = Symbol.for(m[1]);
            let val = subs.substitution(subts, symb);
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

    return acc.join(' ');
};

exports.generateWordSalad = () => {

    const rv = this.makeSubs(subs.templates, subs.substitutions);
    console.log(`Salad: ${rv}`);

    return rv;
};


