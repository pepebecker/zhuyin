import 'mocha'
import { expect } from 'chai'

import zhuyin, { fromPinyin, toPinyin } from '../src/index'

describe('Convert Pinyin to Zhuyin', () => {
	it('should convert Pinyin to Zhuyin', done => {
		const result = zhuyin('wo3demao1xi3huanhe1niu2nai2')
		expect(result.join(' ')).equal('ㄨㄛˇ ㄉㄜ˙ ㄇㄠ ㄒㄧˇ ㄏㄨㄢ˙ ㄏㄜ ㄋㄧㄡˊ ㄋㄞˊ')
		done()
	})
	it('should convert Pinyin to Zhuyin', done => {
		const result = fromPinyin('wo3demao1xi3huanhe1niu2nai2')
		expect(result.join(' ')).equal('ㄨㄛˇ ㄉㄜ˙ ㄇㄠ ㄒㄧˇ ㄏㄨㄢ˙ ㄏㄜ ㄋㄧㄡˊ ㄋㄞˊ')
		done()
	})
	it('should convert Pinyin to Zhuyin', done => {
		const result = fromPinyin('kǎolǜ')
		expect(result.join(' ')).equal('ㄎㄠˇ ㄌㄩ`')
		done()
	})
})

describe('Convert Zhuyin to Pinyin', () => {
	it('should convert Zhuyin to Pinyin', done => {
		const result = toPinyin('ㄨㄛˇ ㄉㄜ˙ ㄇㄠ ㄒㄧˇㄏㄨㄢ˙ ㄏㄜ ㄋㄧㄡˊㄋㄞˊ', { everything: true })
		expect(result.join('')).equal('wǒ de māo xǐhuan hē niúnái')
		done()
	})
	it('should convert Zhuyin to Pinyin', done => {
		const result = toPinyin('ㄨㄛˇ ㄉㄜ˙ ㄇㄠ ㄒㄧˇㄏㄨㄢ˙ ㄏㄜ ㄋㄧㄡˊㄋㄞˊ', { numbered: true, everything: true })
		expect(result.join('')).equal('wo3 de5 mao1 xi3huan5 he1 niu2nai2')
		done()
	})
	it('should convert Zhuyin to Pinyin', done => {
		const result = toPinyin('My: "ㄨㄛˇ ㄉㄜ˙" cat: "ㄇㄠ" likes: "ㄒㄧˇㄏㄨㄢ˙" to drink: "ㄏㄜ" milk: "ㄋㄧㄡˊㄋㄞˊ"', { numbered: true })
		expect(result.join(' ')).equal('wo3 de5 mao1 xi3 huan5 he1 niu2 nai2')
		done()
	})
	it('should convert Zhuyin to Pinyin', done => {
		const result = toPinyin('My: "ㄨㄛˇㄉㄜ˙" cat: "ㄇㄠ" likes: "ㄒㄧˇㄏㄨㄢ˙" to drink: "ㄏㄜ" milk: "ㄋㄧㄡˊㄋㄞˊ"', { numbered: true, everything: true })
		expect(result.join('')).equal('My: "wo3de5" cat: "mao1" likes: "xi3huan5" to drink: "he1" milk: "niu2nai2"')
		done()
	})
})
