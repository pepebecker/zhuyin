# Zhuyin 注音

[![npm version](https://img.shields.io/npm/v/zhuyin.svg)](https://www.npmjs.com/package/zhuyin)
[![Travis Build Status](https://travis-ci.org/pepebecker/zhuyin.svg)](https://travis-ci.org/pepebecker/zhuyin)
[![Greenkeeper badge](https://badges.greenkeeper.io/pepebecker/zhuyin.svg)](https://greenkeeper.io/)
[![dependency status](https://img.shields.io/david/pepebecker/zhuyin.svg)](https://david-dm.org/pepebecker/zhuyin)
[![dev dependency status](https://img.shields.io/david/dev/pepebecker/zhuyin.svg)](https://david-dm.org/pepebecker/zhuyin#info=devDependencies)
[![ISC-licensed](https://img.shields.io/github/license/pepebecker/zhuyin.svg)](https://choosealicense.com/licenses/isc/)
[![chat on gitter](https://badges.gitter.im/pepebecker.svg)](https://gitter.im/pepebecker)

## Install

```shell
npm install zhuyin
```

## Usage

```js
const zhuyin = require('zhuyin')

zhuyin('wǒ de māo xǐhuan hē níunǎi')
.then(console.log)

zhuyin('wo3 de mao1 xi3huan he1niu2 nai3')
.then(console.log)

zhuyin('wǒdemāoxǐhuanhēníunǎi')
.then(console.log)

zhuyin('wo3demao1xi3huanhe1niu2nai3')
.then(console.log)

// [ 'ㄨㄛˇ', 'ㄉㄜ˙', 'ㄇㄠ', 'ㄒㄧˇ', 'ㄏㄨㄢ˙', 'ㄏㄜ', 'ㄋㄧㄡˊ', 'ㄋㄞˇ' ]
```

## Related

- [`pinyin-utils`](https://github.com/pepebecker/pinyin-utils)
- [`pinyin-split`](https://github.com/pepebecker/pinyin-split)
- [`find-hanzi`](https://github.com/pepebecker/find-hanzi)
- [`hsk-words`](https://github.com/pepebecker/hsk-words)
- [`cedict`](https://github.com/pepebecker/cedict)
- [`mdbg`](https://github.com/pepebecker/mdbg)
- [`pinyin-or-hanzi`](https://github.com/pepebecker/pinyin-or-hanzi)
- [`hanzi-to-pinyin`](https://github.com/pepebecker/hanzi-to-pinyin)
- [`pinyin-convert`](https://github.com/pepebecker/pinyin-convert)
- [`pinyin-rest`](https://github.com/pepebecker/pinyin-rest)
- [`pinyin-api`](https://github.com/pepebecker/pinyin-api)
- [`pinyin-bot-core`](https://github.com/pepebecker/pinyin-bot-core)
- [`pinyin-telegram`](https://github.com/pepebecker/pinyin-telegram)
- [`pinyin-messenger`](https://github.com/pepebecker/pinyin-messenger)
- [`pinyin-line`](https://github.com/pepebecker/pinyin-line)
- [`pinyin-chrome`](https://github.com/pepebecker/pinyin-chrome)
- [`pinyin-cli`](https://github.com/pepebecker/pinyin-cli)
- [`hanzi-cli`](https://github.com/pepebecker/hanzi-cli)

## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/pepebecker/zhuyin/issues).
