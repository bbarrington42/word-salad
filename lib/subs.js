// Possible substitutions for the various parts of speech
const assert = require('assert');
const util = require('./util');

const randomArrayItem = (items) => {
    return items[Math.floor(Math.random() * items.length)];
};

const randomValue = (partOfSpeech) => {
    const found = Array.from(substitutions.values()).find(el =>
        Symbol.keyFor(partOfSpeech) === el.partOfSpeech
    );

    return randomArrayItem(found.values);
};

exports.substitution = (partOfSpeech) => {
    assert(typeof partOfSpeech === 'symbol' &&
        Object.values(util.grammar).indexOf(partOfSpeech) !== -1);

    return randomValue(partOfSpeech);
};

exports.template = () => {
    return randomArrayItem(templates);
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
            "wall",
            "criminals"
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

const templates = [
    "As Commander-in-Chief, my ${adjective} priority is the ${noun} of our great country. We cannot surrender ${adjective} control over the nation’s ${noun} to ${adjective} cartels, ${noun}, and ${noun}. We ${verb} future Americans to ${verb} to our country ${adverb} and through a system based on ${noun}. We need ${noun} to ${verb} our country."
];
