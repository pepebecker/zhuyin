'use strict'

const pinyinUtils = require('pinyin-utils')
const pinyinSplit = require('pinyin-split')
const py2zh = require('./py2zh')

const zhuyinTones = ["", "ˊ", "ˇ", "`", "˙"]

const fromPinyin = input => {
  const translate = pinyin => pinyinSplit(pinyin)
  .then(list => list.map(py => {
    let zh = py2zh[pinyinUtils.removeTone(py)]
    return zh + zhuyinTones[pinyinUtils.getToneNumber(py) - 1]
  }))
  if (typeof input === 'string') return translate(input)
  else return Promise.all(input.map(translate))
}

const splitZhuyin = zhuyin => {
  const list = []
  let index = 0
  while (index < zhuyin.length) {
    let count = zhuyin.length - index
    let wordFound = false
    while (count > 1) {
      let word = zhuyin.substr(index, count)
      if (Object.values(py2zh).includes(word)) { // word found
        wordFound = true

        if (zhuyinTones.includes(zhuyin[index + count])) { // tone found after word
          word += zhuyin[index + count]
          count ++
        }

        list.push([word])
        index += count - 1
        break
      }
      count --
    }

    if (!wordFound) {
      if (index === 0 || typeof list[list.length - 1] === 'object') {
        list.push(zhuyin[index])
      } else if (typeof list[list.length - 1] === 'string') {
        list[list.length - 1] += zhuyin[index]
      }
    }

    index ++
  }
  return list
}

const toPinyin = (zhuyin, opts = {}) => {
  let list = splitZhuyin(zhuyin)
  if (opts.onlyPinyin) list = list.filter(item => Array.isArray(item))
  list = list.map(item => {
    if (typeof item === 'string') return item
    let word = item[0]
    let tone = zhuyinTones.indexOf(word[word.length - 1]) + 1
    if (tone > 0) {
      word = word.substr(0, word.length - 1)
    } else {
      tone = 1
    }

    let pinyinIndex = Object.values(py2zh).indexOf(word)
    if (pinyinIndex > -1) {
      const pinyin = Object.keys(py2zh)[pinyinIndex] + tone
      if (opts.numbered) return pinyin
      else return pinyinUtils.numberToMark(pinyin)
    } else {
      return item[0]
    }
  })
  return Promise.resolve(list.join(opts.onlyPinyin ? ' ' : ''))
}

module.exports = fromPinyin
module.exports.fromPinyin = fromPinyin
module.exports.toPinyin = toPinyin
module.exports.split = splitZhuyin
