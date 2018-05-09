'use strict'

const pinyinUtils = require('pinyin-utils')
const pinyinSplit = require('pinyin-split')
const py2zh = require('./py2zh')

const zhuyinTones = ["", "ˊ", "ˇ", "`", "˙"]

const fromPinyin = (input, everything) => {
  const translate = pinyin => {
    return pinyinSplit(pinyin, everything).map(item => {
      if (everything) {
        if (typeof item === 'string') return item
        else {
          let zh = py2zh[pinyinUtils.removeTone(item[0])]
          return [zh + zhuyinTones[pinyinUtils.getToneNumber(item[0]) - 1]]
        }
      } else {
        let zh = py2zh[pinyinUtils.removeTone(item)]
        return zh + zhuyinTones[pinyinUtils.getToneNumber(item) - 1]
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
      if (Object.values(py2zh).includes(word)) { // word found
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

const toPinyin = (zhuyin, opts = {}) => {
  let list = splitZhuyin(zhuyin, opts.everything)
  if (!opts.everything) list = list.filter(item => typeof item === 'string')
  list = list.map(item => {
    if (opts.everything && typeof item === 'string') return item
    else if (typeof item !== 'string') item = item[0]

    let tone = zhuyinTones.indexOf(item[item.length - 1]) + 1
    if (tone > 0) {
      item = item.substr(0, item.length - 1)
    } else {
      tone = 1
    }

    let pinyinIndex = Object.values(py2zh).indexOf(item)
    if (pinyinIndex > -1) {
      const pinyin = Object.keys(py2zh)[pinyinIndex] + tone
      if (opts.numbered) return (opts.everything ? [pinyin] : pinyin)
      else if (opts.everything) return [pinyinUtils.numberToMark(pinyin)]
      else return pinyinUtils.numberToMark(pinyin)
    } else {
      return item
    }
  })
  return list
}

module.exports = fromPinyin
module.exports.fromPinyin = fromPinyin
module.exports.toPinyin = toPinyin
module.exports.split = splitZhuyin
