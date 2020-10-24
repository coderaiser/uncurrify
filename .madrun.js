'use strict';

const {run} = require('madrun');

module.exports = {
    'test': () => 'tape test/*.js',
    'lint': () => 'putout test .madrun.js lib',
    'fix:lint': () => run('lint', '--fix'),
};

