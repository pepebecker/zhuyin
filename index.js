'use strict'

const pinyinUtils = require('pinyin-utils')
const pinyinSplit = require('pinyin-split')
const py2zh = require('./py2zh')
// const zh2py = require('./zh2py')

const fromPinyin = input => {
  const translate = pinyin => pinyinSplit(pinyin)
  .then(list => list.map(py => {
    let zh = py2zh[pinyinUtils.removeTone(py)]
    return zh + py2zh[pinyinUtils.getToneNumber(py)]
  }))
  if (typeof input === 'string') return translate(input)
  else return Promise.all(input.map(translate))
}

const toPinyin = zhuyin => {
  // TODO
  return Promise.resolve(zhuyin)
}

module.exports = fromPinyin
module.exports.fromPinyin = fromPinyin
module.exports.toPinyin = toPinyin
