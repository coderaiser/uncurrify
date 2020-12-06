import {run} from 'madrun';

export default {
    'test': () => 'tape test/*.js',
    'coverage': async () => `nyc ${await run('test')}`,
    'lint': () => 'putout .',
    'fix:lint': () => run('lint', '--fix'),
};

