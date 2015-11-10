'use strict';

module.exports = uncurrify;

var reduce = function reduce(list, fn, value) {
    return [].reduce.call(list, fn, value);
};

function uncurrify(fn) {
    check(fn);

    return function () {
        return reduce(arguments, function (fn, arg) {
            return fn(arg);
        }, fn);
    };
}

function check(fn) {
    if (typeof fn !== 'function') throw Error('fn should be function!');
}