'use strict';

module.exports = uncurrify;

let reduce = (list, fn, value) => [].reduce.call(list, fn, value);

function uncurrify(fn) {
    check(fn);
    
    return function() {
        return reduce(arguments, (fn, arg) => {
            return fn(arg);
        }, fn);
    };
}

function check(fn) {
    if (typeof fn !== 'function')
        throw Error('fn should be function!');
}
