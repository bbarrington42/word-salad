// Possible substitutions for the various parts of speech
const assert = require('assert');
const util = require('./util');

const randomArrayItem = (items) => {
    return items[Math.floor(Math.random() * items.length)];
};

const randomValue = (subs, partOfSpeech) => {
    const found = Array.from(subs).find(el =>
        Symbol.keyFor(partOfSpeech) === el.partOfSpeech
    );

    return randomArrayItem(found.values);
};

exports.substitution = (subs, partOfSpeech) => {
    assert(typeof partOfSpeech === 'symbol' &&
        Object.values(util.grammar).indexOf(partOfSpeech) !== -1);

    return randomValue(subs, partOfSpeech);
};

exports.template = (templs) => {
    return randomArrayItem(templs);
};

exports.substitutions = [
    {
        partOfSpeech: "adjective",
        values: [
            "bigly",
            "very",
            "huge",
            "powerful",
            "secure",
            "terrible",
            "SAD"
        ]
    },
    {
        partOfSpeech: "adverb",
        values:
            [
                "almost",
                "too",
                "just",
                "eagerly",
                "really",
                "savagely",
                "daily",
                "soon",
                "everywhere",
                "hugely",
                "greater"
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
            "criminals",
            "rule of law",
            "crime",
            "fake news",
            "cartels"
        ]
    },
    {
        partOfSpeech: "verb",
        values: [
            "pouring",
            "rape",
            "protect",
            "shower",
            "stop",
            "sweep",
            "remain",
            "appear"
        ]
    }
];

exports.templates = [
    "As Commander-in-Chief, my ${adjective} priority is the ${noun} of our great country. We cannot surrender ${adjective} control over the nation’s ${noun} to ${adjective} cartels, ${noun}, and ${noun}. We ${verb} future Americans to ${verb} to our country ${adverb} and through a system based on ${noun}. We need ${noun} to ${verb} our country.",
    "Finally, they're moving back. ${noun} said it couldn’t happen. It's happening. And ${noun} want them to ${verb} the blessings of safety and liberty, and the rule of law. We ${adverb} can deliver these blessings without a strong and secure ${noun}. I believe that ${noun} in this country ${adverb} can go down by a ${adjective} percentage if we have ${adjective} security on our southern ${noun}."
];
