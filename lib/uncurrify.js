'use strict';

module.exports = uncurrify;

const reduce = (list, fn, value) => [].reduce.call(list, fn, value);

function uncurrify(fn) {
    check(fn);
    
    return (...args) => {
        return reduce(args, (fn, arg) => {
            return fn(arg);
        }, fn);
    };
}

function check(fn) {
    if (typeof fn !== 'function')
        throw Error('fn should be function!');
}
