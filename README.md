# uncurrify [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL]

Takes a function `f(x)` that returns another function `g(y)` as a result, and yields a new function `f′(x, y)` that takes a number of additional parameters and applies them to the function returned by function `f`.

## Install

```
npm i uncurrify --save
```

## How to use?

```js
let uncurrify = require('ununcurrify');

let g = x => y => sum(x + y);
let f = x => g(x);
let sum = (x, y) => x + y;

ununcurrify(f)(2, 2);
// returns
4
```

## License

MIT

[NPMIMGURL]:                https://img.shields.io/npm/v/uncurrify.svg?style=flat
[BuildStatusIMGURL]:        https://img.shields.io/travis/coderaiser/uncurrify/master.svg?style=flat
[DependencyStatusIMGURL]:   https://img.shields.io/gemnasium/coderaiser/uncurrify.svg?style=flat
[LicenseIMGURL]:            https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[NPMURL]:                   https://npmjs.org/package/uncurrify "npm"
[BuildStatusURL]:           https://travis-ci.org/coderaiser/uncurrify  "Build Status"
[DependencyStatusURL]:      https://gemnasium.com/coderaiser/uncurrify "Dependency Status"
[LicenseURL]:               https://tldrlegal.com/license/mit-license "MIT License"
