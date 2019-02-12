# @rxluz/prevent-object-recursion

> ➰ Remove all recursive references from the object

[![Build Status](https://travis-ci.org/rxluz/prevent-object-recursion.svg?branch=master)](https://travis-ci.org/rxluz/prevent-object-recursion)
[![codecov](https://codecov.io/gh/rxluz/prevent-object-recursion/branch/master/graph/badge.svg)](https://codecov.io/gh/rxluz/prevent-object-recursion)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![](https://img.shields.io/bundlephobia/min/@rxluz/prevent-object-recursion.svg?style=flat)
![](https://img.shields.io/npm/v/@rxluz/prevent-object-recursion.svg?style=flat)
![](https://img.shields.io/npm/l/@rxluz/prevent-object-recursion.svg?style=flat)

## Usage

### Example (es module)

```js
import preventObjectRecursion from '@rxluz/prevent-object-recursion';

const a = { hello: 'world' };
const b = { hey: 'hey', hello: a };
a.newProp = b;

console.log(preventObjectRecursion(a));
// => { hello: 'world', newProp: { hey: 'hey' }}
```

### Example (commonjs)

```js
var preventObjectRecursion = require('@rxluz/prevent-object-recursion').default;

const a = { hello: 'world' };
const b = { hey: 'hey', hello: a };
a.newProp = b;

console.log(preventObjectRecursion(a));
// => { hello: 'world', newProp: { hey: 'hey' }}
```

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm i @rxluz/prevent-object-recursion --save
```

## Acknowledgments

- This project was inspired by a chat in NodeJS Brasil Telegram Group.
- [rxluz](https://github.com/rxluz)

## See Also

- [Project documentation](https://rxluz.github.io/prevent-object-recursion/)
- [Dev.to platform post about this project](https://dev.to/ricardo/i-wrote-an-npm-package-to-prevent-infinite-recursion-in-objects-5422)

## License

MIT
