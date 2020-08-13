import { formatDecamal } from '../utils/tools.js'

const filterFloat = val => {
  let returnMoney = 0
  if (val || val === 0) {
    let money = val / 100
    returnMoney = returnMoney + money
    returnMoney = formatDecamal(returnMoney, 2)
  } else {
    returnMoney = '-'
  }
  return returnMoney
}

const filterDateFormater = val => {
  if (val === undefined) {
    return '-'
  }
  val = String(val)
  let str = ''
  if (val && val.length === 14) {
    let year = val.substring(0, 4)
    let month = val.substring(4, 6)
    let day = val.substring(6, 8)
    let hour = val.substring(8, 10)
    let minutes = val.substring(10, 12)
    let seconds = val.substring(12, 14)
    str = year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds
  } else if (val && val.length === 8) {
    let year = val.substring(0, 4)
    let month = val.substring(4, 6)
    let day = val.substring(6, 8)
    str = year + '-' + month + '-' + day
  } else if (val && val.length === 13) {
    let date = new Date(Number(val))
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDay()
    let hour = date.getHours() >= 10 ? date.getHours() : '0' + date.getHours()
    let minutes = date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes()
    let seconds = date.getSeconds() >= 10 ? date.getSeconds() : '0' + date.getSeconds()
    str = year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds
  } else {
    str = val
  }
  return str
}

const filterFloatSpiltOne = val => {
  let returnMoney = 0
  if (val) {
    let money = val / 100
    returnMoney = money.toFixed(2).split('.')[1]
  } else if (val === 0) {
    returnMoney = val.toFixed(2).split('.')[1]
  }
  return '.' + returnMoney
}

const filterFloatSpiltZroe = val => {
  let returnMoney = 0
  if (val) {
    let money = val / 100
    returnMoney = money.toLocaleString(2).split('.')[0]
  }
  return returnMoney
}

const filterIdentity = (val, beginLen, endLen) => {
  // 敏感数据脱敏
  if (typeof val !== 'undefined') {
    let len = val.length
    let firstStr = val.substr(0, beginLen)
    let lastStr = val.substr(endLen)
    let middleStr = val.substring(beginLen, len - Math.abs(endLen)).replace(/[\s\S]/ig, '*')
    return (firstStr + middleStr + lastStr)
  }
}

export default {
  filterFloat,
  filterDateFormater,
  filterFloatSpiltOne,
  filterFloatSpiltZroe,
  filterIdentity
}
