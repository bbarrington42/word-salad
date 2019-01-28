'use strict';

const assert = require('assert');
const util = require('./lib/util');

const template1 = 'This is a ${adjective} mistake';
const expected = 'This is a huge mistake';

it('correctly substitutes into word-salad template', () => {
    const sub = new util.Substitution('huge', util.grammar.adjective);

    assert(util.findAndReplace(template1, sub), expected)
});
