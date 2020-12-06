'use strict';

const test = require('supertape');
const tryCatch = require('try-catch');

const uncurrify = require('..');

const f = (x) => (y) => sum(x, y);
const sum = (x, y) => x + y;

test('should return function', (t) => {
    const fn = uncurrify(f);
    
    t.equal(typeof fn, 'function', 'shold return result');
    t.end();
});

test('should call function', (t) => {
    const fn = uncurrify(f);
    
    t.equal(fn(2, 2), 4, 'shold return result of uncuried function');
    t.end();
});

test('no arguments', (t) => {
    const [error] = tryCatch(uncurrify);
    
    t.equal(error.message, 'fn should be function!', 'shoud throw when wrong type');
    t.end();
});

test('arguments: wrong type', (t) => {
    const [error] = tryCatch(uncurrify, 1);
    
    t.equal(error.message, 'fn should be function!', 'shoud throw when wrong type');
    t.end();
});

