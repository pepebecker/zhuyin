'use strict'

const zhuyin = require('../index')

describe('Convert Pinyin to Zhuyin', () => {
	it('should convert Pinyin to Zhuyin', done => {
		const result = zhuyin('wo3demao1xi3huanhe1niu2nai2')
		result.join(' ').should.equal('ㄨㄛˇ ㄉㄜ˙ ㄇㄠ ㄒㄧˇ ㄏㄨㄢ˙ ㄏㄜ ㄋㄧㄡˊ ㄋㄞˊ')
		done()
	})
	it('should convert Pinyin to Zhuyin', done => {
		const result = zhuyin.fromPinyin('wo3demao1xi3huanhe1niu2nai2')
		result.join(' ').should.equal('ㄨㄛˇ ㄉㄜ˙ ㄇㄠ ㄒㄧˇ ㄏㄨㄢ˙ ㄏㄜ ㄋㄧㄡˊ ㄋㄞˊ')
		done()
	})
})

describe('Convert Zhuyin to Pinyin', () => {
	it('should convert Zhuyin to Pinyin', done => {
		const result = zhuyin.toPinyin('ㄨㄛˇ ㄉㄜ˙ ㄇㄠ ㄒㄧˇㄏㄨㄢ˙ ㄏㄜ ㄋㄧㄡˊㄋㄞˊ', { everything: true })
		result.join('').should.equal('wǒ de māo xǐhuan hē niúnái')
		done()
	})
	it('should convert Zhuyin to Pinyin', done => {
		const result = zhuyin.toPinyin('ㄨㄛˇ ㄉㄜ˙ ㄇㄠ ㄒㄧˇㄏㄨㄢ˙ ㄏㄜ ㄋㄧㄡˊㄋㄞˊ', { numbered: true, everything: true })
		result.join('').should.equal('wo3 de5 mao1 xi3huan5 he1 niu2nai2')
		done()
	})
	it('should convert Zhuyin to Pinyin', done => {
		const result = zhuyin.toPinyin('My: "ㄨㄛˇ ㄉㄜ˙" cat: "ㄇㄠ" likes: "ㄒㄧˇㄏㄨㄢ˙" to drink: "ㄏㄜ" milk: "ㄋㄧㄡˊㄋㄞˊ"', { numbered: true })
		result.join(' ').should.equal('wo3 de5 mao1 xi3 huan5 he1 niu2 nai2')
		done()
	})
	it('should convert Zhuyin to Pinyin', done => {
		const result = zhuyin.toPinyin('My: "ㄨㄛˇㄉㄜ˙" cat: "ㄇㄠ" likes: "ㄒㄧˇㄏㄨㄢ˙" to drink: "ㄏㄜ" milk: "ㄋㄧㄡˊㄋㄞˊ"', { numbered: true, everything: true })
		result.join('').should.equal('My: "wo3de5" cat: "mao1" likes: "xi3huan5" to drink: "he1" milk: "niu2nai2"')
		done()
	})
})
