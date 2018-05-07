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

describe('Convert Zhuyin to Pinyin', () => {
	it('should convert Zhuyin to Pinyin', () => {
		return zhuyin.toPinyin('ㄨㄛˇ ㄉㄜ˙ ㄇㄠ ㄒㄧˇㄏㄨㄢ˙ ㄏㄜ ㄋㄧㄡˊㄋㄞˊ')
		.then(pinyin => pinyin.should.equal('wǒ de māo xǐhuan hē niúnái'))
	})
	it('should convert Zhuyin to Pinyin', () => {
		return zhuyin.toPinyin('ㄨㄛˇ ㄉㄜ˙ ㄇㄠ ㄒㄧˇㄏㄨㄢ˙ ㄏㄜ ㄋㄧㄡˊㄋㄞˊ', { numbered: true })
		.then(pinyin => pinyin.should.equal('wo3 de5 mao1 xi3huan5 he1 niu2nai2'))
	})
	it('should convert Zhuyin to Pinyin', () => {
		return zhuyin.toPinyin('My: "ㄨㄛˇ ㄉㄜ˙" cat: "ㄇㄠ" likes: "ㄒㄧˇㄏㄨㄢ˙" to drink: "ㄏㄜ" milk: "ㄋㄧㄡˊㄋㄞˊ"', { numbered: true, onlyPinyin: true })
		.then(pinyin => pinyin.should.equal('wo3 de5 mao1 xi3 huan5 he1 niu2 nai2'))
	})
	it('should convert Zhuyin to Pinyin', () => {
		return zhuyin.toPinyin('My: "ㄨㄛˇㄉㄜ˙" cat: "ㄇㄠ" likes: "ㄒㄧˇㄏㄨㄢ˙" to drink: "ㄏㄜ" milk: "ㄋㄧㄡˊㄋㄞˊ"', { numbered: true })
			.then(pinyin => pinyin.should.equal('My: "wo3de5" cat: "mao1" likes: "xi3huan5" to drink: "he1" milk: "niu2nai2"'))
	})
})
