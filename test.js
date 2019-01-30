'use strict';

const assert = require('assert');
const util = require('./lib/util');

const templates = [
    "Noun: ${noun}, Verb: ${verb}, Adjective: ${adjective}, Adverb: ${adverb}"
];

const substitutions = [
    {
        partOfSpeech: "adjective",
        values: [
            "adjective"
        ]
    },
    {
        partOfSpeech: "adverb",
        values: [
            "adverb"
        ]
    },
    {
        partOfSpeech: "noun",
        values: [
            "noun"
        ]
    },
    {
        partOfSpeech: "verb",
        values: [
            "verb"
        ]
    }
];

const expected = "Noun: noun, Verb: verb, Adjective: adjective, Adverb: adverb";

it('correctly substitutes parts of speech', () => {
    const actual = util.makeSubs(templates, substitutions);

    assert.deepStrictEqual(actual, expected);
});

