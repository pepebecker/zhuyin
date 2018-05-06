'use strict'

const zhuyin = require('../index')

describe('Convert Pinyin to Zhuyin', () => {
	it('should convert Pinyin to Zhuyin', () => {
		return zhuyin('wo3demao1xi3huanhe1niu2nai2')
		.then(list => list.join(' ').should.equal('ㄨㄛˇ ㄉㄜ˙ ㄇㄠ ㄒㄧˇ ㄏㄨㄢ˙ ㄏㄜ ㄋㄧㄡˊ ㄋㄞˊ'))
	})
	it('should convert Pinyin to Zhuyin', () => {
		return zhuyin.fromPinyin('wo3demao1xi3huanhe1niu2nai2')
		.then(list => list.join(' ').should.equal('ㄨㄛˇ ㄉㄜ˙ ㄇㄠ ㄒㄧˇ ㄏㄨㄢ˙ ㄏㄜ ㄋㄧㄡˊ ㄋㄞˊ'))
	})
})
