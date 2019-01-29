'use strict'

const pinyinUtils = require('pinyin-utils')
const pinyinSplit = require('pinyin-split')
const py2zy = require('./py2zy')

const zhuyinTones = ["", "ˊ", "ˇ", "`", "˙"]

const fromPinyinSyllable = pinyin => {
  let zy = py2zy[pinyinUtils.removeTone(pinyin).toLowerCase()]
  return zy + zhuyinTones[pinyinUtils.getToneNumber(pinyin) - 1]
}

const fromPinyin = (input, everything) => {
  const translate = pinyin => {
    return pinyinSplit(pinyin, everything).map(item => {
      if (everything) {
        if (typeof item === 'string') return item
        else {
          return fromPinyinSyllable(item[0])
        }
      } else {
        return fromPinyinSyllable(item)
      }
    })
  }
  if (typeof input === 'string') return translate(input)
  else return input.map(translate)
}

const splitZhuyin = (zhuyin, everything) => {
  const list = []
  let index = 0
  while (index < zhuyin.length) {
    let count = zhuyin.length - index
    let wordFound = false
    while (count > 1) {
      let word = zhuyin.substr(index, count)
      if (Object.values(py2zy).includes(word)) { // word found
        wordFound = true

        if (zhuyinTones.includes(zhuyin[index + count])) { // tone found after word
          word += zhuyin[index + count]
          count ++
        }

        list.push(everything ? [word] : word)
        index += count - 1
        break
      }
      count --
    }

    if (!wordFound && everything) {
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

const toPinyinSyllable = zhuyin => {
  let tone = zhuyinTones.indexOf(zhuyin[zhuyin.length - 1]) + 1
  if (tone > 0) {
    zhuyin = zhuyin.substr(0, zhuyin.length - 1)
  } else {
    tone = 1
  }
  let pinyinIndex = Object.values(py2zy).indexOf(zhuyin)
  if (pinyinIndex > -1) {
    return Object.keys(py2zy)[pinyinIndex] + tone
  } else {
    return zhuyin
  }
}

const toPinyin = (zhuyin, opts = {}) => {
  let list = splitZhuyin(zhuyin, opts.everything)
  if (!opts.everything) list = list.filter(item => typeof item === 'string')
  list = list.map(item => {
    if (opts.everything && typeof item === 'string') return item
    else if (typeof item !== 'string') item = item[0]
    const pinyin = toPinyinSyllable(item)
    if (opts.numbered) return (opts.everything ? [pinyin] : pinyin)
    else if (opts.everything) return [pinyinUtils.numberToMark(pinyin)]
    else return pinyinUtils.numberToMark(pinyin)
  })
  return list
}

module.exports = fromPinyin
module.exports.fromPinyinSyllable = fromPinyinSyllable
module.exports.fromPinyin = fromPinyin
module.exports.toPinyinSyllable = toPinyinSyllable
module.exports.toPinyin = toPinyin
module.exports.split = splitZhuyin
