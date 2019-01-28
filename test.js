'use strict';

const assert = require('assert');
const util = require('./lib/util');

const template1 = ['this', 'is', 'a', util.grammar.adjective, 'mistake'];

it('correctly substitutes into word-salad template', () => {
    const sub = {text: 'huge', type: util.grammar.adjective};
    const t = Array.from(template1);
    t[3] = sub.text;
    const expected = t.join(' ');
    assert(util.findAndReplace(template1, sub), expected)
});
