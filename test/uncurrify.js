'use strict';

const uncurrify = require('..');
const test = require('supertape');

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
    t.throws(uncurrify, /fn should be function!/, 'should throw when no fn');
    t.end();
});

test('arguments: wrong type', (t) => {
    const fn = () => uncurrify(1);
    
    t.throws(fn, /fn should be function/, 'shoud throw when wrong type');
    t.end();
});

