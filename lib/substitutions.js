// Possible substitutions for the various parts of speech

const util = require('./util');


exports.adjectives = {
    type: util.grammar.adjective,
    values: [
        "bigly",
        "very",
        "huge",
        "powerful"
    ]
};

exports.adverbs = {
    type: util.grammar.adverb,
    values: [
        "almost",
        "too",
        "just"
    ]
};

exports.nouns = {
    type: util.grammar.noun,
    values: [
        "collusion",
        "MS-13",
        "Mexicans",
        "rapists",
        "caravan",
        "wall"
    ]
};

exports.verbs = {
    type: util.grammar.verb,
    values: [
        "pouring",
        "raping"
    ]
};
