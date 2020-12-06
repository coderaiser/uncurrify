'use strict';

module.exports = uncurrify;

function uncurrify(fn) {
    check(fn);
    
    return (...args) => {
        return args.reduce((fn, arg) => {
            return fn(arg);
        }, fn);
    };
}

function check(fn) {
    if (typeof fn !== 'function')
        throw Error('fn should be function!');
}
