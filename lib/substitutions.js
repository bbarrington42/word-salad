// Possible substitutions for the various parts of speech
const assert = require('assert');
const util = require('./util');

const randomValue = (partOfSpeech) => {
    const found = Array.from(substitutions.values()).find(el =>
        partOfSpeech.toString().indexOf(el.partOfSpeech) !== -1
    );
    
    const items = found.values;
    return items[Math.floor(Math.random() * items.length)];
};

exports.substitution = (partOfSpeech) => {
    assert(typeof partOfSpeech === 'symbol' &&
        Object.values(util.grammar).indexOf(partOfSpeech) !== -1);

    return randomValue(partOfSpeech);
};

const substitutions = [
    {
        partOfSpeech: "adjective",
        values: [
            "bigly",
            "very",
            "huge",
            "powerful"
        ]
    },
    {
        partOfSpeech: "adverb",
        values:
            [
                "almost",
                "too",
                "just"
            ]
    },
    {
        partOfSpeech: "noun",
        values: [
            "collusion",
            "MS-13",
            "Mexicans",
            "rapists",
            "caravan",
            "wall"
        ]
    },
    {
        partOfSpeech: "verb",
        values: [
            "pouring",
            "raping"
        ]
    }
];


const rv = this.substitution(util.grammar.adjective);

console.log(rv);
