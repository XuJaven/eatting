// const API = require('#/json/api.json')
const DATETYPE = {
  YEAR: 'year',
  MONTHONE: 'month',
  DAY: 'day',
  HOUTS: 'houts',
  MINUTES: 'miutes'
}
const mode = {
  _DATEONE: 'date',
  _MONTHONE: 'month',
  _YEARONE: 'year',
  _TIMEONE: 'time',
  _DATE: ['date', 'date'],
  _MONTH: ['month', 'month'],
  _YEAR: ['year', 'year'],
  _TIME: ['time', 'time']
}
const formatter = {
  _YMD1: 'YYYY-MM-DD',
  _YMD2: 'YYYYMMDD',
  _YM1: 'YYYY-MM',
  _YM2: 'YYYYMM',
  _YM3: 'YYYY/MM',
  _YMDTIMES: 'YYYY-MM-DD HH:mm:ss',
  _YMDTIMES2: 'YYYYMMDDHHmmss',
  _YMDTIMEM: 'YYYY-MM-DD HH:mm',
  _YMDTIMEH: 'YYYY-MM-DD HH'
}
const messageNode = {
  固话: '0',
  移动: '2',
  宽带: '3',
  智能公话: '4',
  互联星空: '5',
  天翼高清: '6',
  未知: '99'
}
function formatterDate (date, dateFormat, yearStr, monthStr) {
  let s = ''
  if (date) {
    s = new Date(date)
  } else {
    s = new Date()
  }
  let year
  if (yearStr) {
    year = s.getFullYear() - yearStr
  } else {
    year = s.getFullYear()
  }
  let month = s.getMonth() + 1
  if (monthStr) {
    month = month === 1 ? 12 : month - monthStr
    year = month === 12 ? year - 1 : year
  }
  let day = s.getDate()
  if (!isLeapYear(year) && month === 2 && day === 29) {
    // 处理闰年
    day = day - 1
  } else if ((day === 31 || day === 30) && month === 2) {
    if (isLeapYear(year)) {
      // 处理闰年
      day = 29
    } else {
      day = 28
    }
  } else if (day === 31 && (month === 4 || month === 6 || month === 9 || month === 11)) {
    day = 30
  }
  let hours = s.getHours()
  let minutes = s.getMinutes()
  let seconds = s.getSeconds()
  month = month > 9 ? month : '0' + month
  day = day > 9 ? day : '0' + day
  hours = hours > 9 ? hours : '0' + hours
  minutes = minutes > 9 ? minutes : '0' + minutes
  seconds = seconds > 9 ? seconds : '0' + seconds
  let dateFmt = ''
  if (dateFormat === formatter._YMD1) {
    dateFmt = year + '-' + month + '-' + day
  } else if (dateFormat === formatter._YMD2) {
    dateFmt = year + '' + month + '' + day
  } else if (dateFormat === formatter._YM1) {
    dateFmt = year + '-' + month
  } else if (dateFormat === formatter._YM2) {
    dateFmt = year + '' + month
  } else if (dateFormat === formatter._YM3) {
    dateFmt = year + '/' + month
  } else if (dateFormat === formatter._YMDTIMES) {
    dateFmt = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
  } else if (dateFormat === formatter._YMDTIMES2) {
    dateFmt = year + '' + month + '' + day + '' + hours + '' + minutes + '' + seconds
  } else if (dateFormat === formatter._YMDTIMEM) {
    dateFmt = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes
  } else if (dateFormat === formatter._YMDTIMEH) {
    dateFmt = year + '-' + month + '-' + day + ' ' + hours
  }

  return dateFmt
}
/**
 * @param beginDate 起始日期
 * @param endDate 结束日期
 * @param section 判断区间 整数
 * @param errorMsg 错误提示消息
 * @returns {{msg: *, success: boolean}}
 */
export function judgeDate (beginDate, endDate, section, errorMsg) {
  let result = { success: false, msg: errorMsg }
  let beginYear = parseInt(beginDate.substring(0, 4))
  let beginMonth = parseInt(beginDate.substring(4, 6))
  let beginDay = parseInt(beginDate.substring(6, 8))
  let endYear = parseInt(endDate.substring(0, 4))
  let endMonth = parseInt(endDate.substring(4, 6))
  let endDay = parseInt(endDate.substring(6, 8))
  if (beginYear > endYear) {
    result.msg = '起始日期大于结束日期'
    return result
  }
  if (beginYear < endYear) {
    endMonth = endMonth + 12 * (endYear - beginYear)
  }
  if (endMonth - beginMonth <= section) {
    if (beginDate.length < 8) {
      result.success = true
    } else {
      if (endDay - beginDay > 0 && endMonth - beginMonth === section) {
        result.success = false
      } else {
        result.success = true
      }
    }
    return result
  } else {
    result.success = false
    return result
  }
}
/**
 *
 * @param date 日期，为null 默认为当前时间
 * @param type 处理年、月、日、时、分 具体值见DATETYPE
 * @param section 需要增减的数值
 * @param dateFormat 返回的日期格式
 * @param lastDay 是否获取当月的最后一天
 * @returns {string}
 */
export function dealDateWithIn (date, type, section, dateFormat, lastDay) {
  let s = ''
  if (date) {
    s = new Date(date)
  } else {
    s = new Date()
  }
  let year = s.getFullYear()
  let month = s.getMonth() + 1
  let day = s.getDate()
  let hours = s.getHours()
  let minutes = s.getMinutes()
  let seconds = s.getSeconds()
  if (type === DATETYPE.YEAR) {
    year = year - section
  }
  if (type === DATETYPE.MONTHONE) {
    month = month - section
    if (month <= 0) {
      year--
      month = 12 + month
    } else if (month >= 13) {
      year++
      month = month - 12
    }
    s = new Date(year, month, day)
  }
  if (type === DATETYPE.DAY) {
    let oldDay = day
    day = day - section
    if (month === 1 && oldDay === 1) {
      year--
      month = 12
      day = 31 + day
    } else if (oldDay === 1 && day <= 0) {
      month--
      s = new Date(year, month, 0)
      day = s.getDate() + day
    }
  }
  if (lastDay) {
    // 日期 date设置为0时，创建的日期的date为月份的最后一天
    s = new Date(year, month, 0)
    day = s.getDate()
  }
  if (type === DATETYPE.HOUTS) {
    hours = s.getHours() - section
  }
  if (type === DATETYPE.MINUTES) {
    minutes = s.getMinutes() - section
  }
  month = month > 9 ? month : '0' + month
  day = day > 9 ? day : '0' + day
  hours = hours > 9 ? hours : '0' + hours
  minutes = minutes > 9 ? minutes : '0' + minutes
  seconds = seconds > 9 ? seconds : '0' + seconds
  let dateFmt = ''
  if (dateFormat === formatter._YMD1) {
    dateFmt = year + '-' + month + '-' + day
  } else if (dateFormat === formatter._YMD2) {
    dateFmt = year + '' + month + '' + day
  } else if (dateFormat === formatter._YM1) {
    dateFmt = year + '-' + month
  } else if (dateFormat === formatter._YM2) {
    dateFmt = year + '' + month
  } else if (dateFormat === formatter._YM3) {
    dateFmt = year + '/' + month
  } else if (dateFormat === formatter._YMDTIMES) {
    dateFmt = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
  } else if (dateFormat === formatter._YMDTIMES2) {
    dateFmt = year + '' + month + '' + day + '' + hours + '' + minutes + '' + seconds
  } else if (dateFormat === formatter._YMDTIMEM) {
    dateFmt = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes
  } else if (dateFormat === formatter._YMDTIMEH) {
    dateFmt = year + '-' + month + '-' + day + ' ' + hours
  }
  return dateFmt
}
export function busOn (name) {
  return {
    global: name + 'Global',
    condition: name
  }
}
export function formatterFloat (amount) {
  let returnMoney = 0
  if (amount) {
    let money = amount / 100
    returnMoney = returnMoney + money
  }
  return returnMoney.toFixed(2)
}
export function regNumber (value) {
  let regNumber = /^[0-9]*$/
  return regNumber.test(value)
}
export function regFloat (value) {
  let regFloat = /^[0-9]\d*$|^[1-9]\d*\.\d{1,2}$|^0\.\d{1,2}$/
  return regFloat.test(value)
}
export function formatDecamal (num, decimal) {
  num = num.toString()
  let index = num.indexOf('.')
  if (index !== -1) {
    num = num.substring(0, decimal + index + 1)
  } else {
    num = num.substring(0)
  }
  return parseFloat(num).toFixed(decimal)
}
export function formatterDateForStr (date, dateFormat, yearStr) {
  let dateFmt = ''
  if (date) {
    let dateLength = date.length
    let year
    let month
    let day
    let hours
    let minutes
    let seconds
    if (dateLength && dateLength === 14) {
      year = parseInt(date.substring(0, 4))
      month = parseInt(date.substring(4, 6))
      day = parseInt(date.substring(6, 8))
      hours = parseInt(date.substring(8, 10))
      minutes = parseInt(date.substring(10, 12))
      seconds = parseInt(date.substring(12, 14))
      month = month > 9 ? month : '0' + month
      day = day > 9 ? day : '0' + day
      hours = hours > 9 ? hours : '0' + hours
      minutes = minutes > 9 ? minutes : '0' + minutes
      seconds = seconds > 9 ? seconds : '0' + seconds
      dateFmt = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
    } else if (dateLength && dateLength === 8) {
      year = parseInt(date.substring(0, 4))
      month = parseInt(date.substring(4, 6))
      day = parseInt(date.substring(6, 8))
      month = month > 9 ? month : '0' + month
      day = day > 9 ? day : '0' + day
      dateFmt = year + '-' + month + '-' + day
    } else {
      dateFmt = date
    }
  }
  return dateFmt
}
// 获取cookie
export function getCookie (cname) {
  let name = cname + '='
  let decodedCookie = decodeURIComponent(document.cookie)
  let ca = decodedCookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}
// 设置cookie,增加到vue实例方便全局调用
export function setCookie (cname, value, expiredays) {
  let newValue = value
  if (Number(value) === -1) {
    newValue = 'undefined'
  }
  let exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  // document.cookie = cname + '=' + escape(newValue) + ((exdate == null) ? '' : ';expires=' + exdate.toGMTString()) + 'domain=' + API.COOKIEULR + ';' + 'path=/;'
  
}
// 删除cookie
export function delCookie (name) {
  let exp = new Date()
  exp.setTime(exp.getTime() - 1)
  let cval = getCookie(name)
  if (cval != null) {
    document.cookie = name + '=' + cval + '; expires=' + exp.toGMTString() + '; path=/;'
  }
}
export function stringToDateTime (date) {
  let time = 0
  if (date) {
    date = date.replace('/', '').replace('/', '').replace(' ', '').replace(':', '').replace(':', '')
    let dateLength = date.length
    let year
    let month
    let day
    let hours
    let minutes
    let seconds
    if (dateLength && dateLength === 14) {
      year = parseInt(date.substring(0, 4))
      month = parseInt(date.substring(4, 6))
      day = parseInt(date.substring(6, 8))
      hours = parseInt(date.substring(8, 10))
      minutes = parseInt(date.substring(10, 12))
      seconds = parseInt(date.substring(12, 14))
      let sTime = new Date(year, month - 1, day, hours, minutes, seconds)
      time = sTime.getTime()
    } else if (dateLength && dateLength === 8) {
      year = parseInt(date.substring(0, 4))
      month = parseInt(date.substring(4, 6))
      day = parseInt(date.substring(6, 8))
      let sTime = new Date(year, month, day)
      time = sTime.getTime()
    }
  }
  return time
}
/* window.RTCPeerConnection || */
export function _getAddIps (callBack) {
  let name = getExploreName()
  if (name !== 'IE' && name !== 'IE>=11') {
    let RTCPeerConnection = window.webkitRTCPeerConnection || window.mozRTCPeerConnection
    if (RTCPeerConnection) {
      var rtc = new RTCPeerConnection({ iceServers: [] })
      if (1 || window.mozRTCPeerConnection) {
        rtc.createDataChannel('', { reliable: false })
      }
      rtc.onicecandidate = function (evt) {
        if (evt.candidate) {
          grepSDP('a=' + evt.candidate.candidate)
        }
      }
      rtc.createOffer(
        function (offerDesc) {
          grepSDP(offerDesc.sdp)
          rtc.setLocalDescription(offerDesc)
        },
        function (e) {
          console.warn('offer failed', e)
        }
      )
      let addrs = Object.create(null)
      addrs['0.0.0.0'] = false
      let updateDisplay = function (newAddr) {
        if (newAddr in addrs) {
          return false
        } else {
          addrs[newAddr] = true
        }
        let displayAddrs = Object.keys(addrs).filter(function (k) {
          return addrs[k]
        })
        callBack(displayAddrs.join(','))
      }
      let grepSDP = function (sdp) {
        sdp.split('\r\n').forEach(function (line) {
          if (~line.indexOf('a=candidate')) {
            let parts = line.split(' ')
            let addr = parts[4]
            let type = parts[7]
            if (type === 'host') updateDisplay(addr)
          } else if (~line.indexOf('c=')) {
            let parts = line.split(' ')
            let addr = parts[2]
            updateDisplay(addr)
          }
        })
      }
    }
  } else {
    try {
      // eslint-disable-next-line
      let locator = new ActiveXObject("WbemScripting.SWbemLocator");
      var service = locator.ConnectServer('.') // 连接本机服务器
      var properties = service.ExecQuery(
        'SELECT * FROM Win32_NetworkAdapterConfiguration where IPEnabled=TRUE'
      )
      // 查询使用SQL标准
      // eslint-disable-next-line
      var e = new Enumerator(properties);
      for (; !e.atEnd(); e.moveNext()) {
        var p = e.item()
        callBack(p.IPAddress(0))
      }
    } catch (w) {
      if (process.env.NODE_ENV !== 'production') {
      }
    }
  }
}

export function isNumber (val) {
  var regPos = /^\d+(\.\d+)?$/ // 非负浮点数
  var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/ // 负浮点数
  if (regPos.test(val) || regNeg.test(val)) {
    return true
  } else {
    return false
  }
}

export function checkRates (str) {
  let re = /^(([1-9][0-9]*\.[0-9][0-9]*)|([0]\.[0-9][0-9]*)|([1-9][0-9]*)|([0]{1}))$/
  let Sure
  if (!re.test(str)) {
    Sure = false
  } else {
    Sure = true
  }
  return Sure
}
export function getExploreName () {
  let userAgent = navigator.userAgent
  if (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) {
    return 'Opera'
  } else if (
    userAgent.indexOf('compatible') > -1 &&
    userAgent.indexOf('MSIE') > -1
  ) {
    return 'IE'
  } else if (userAgent.indexOf('Edge') > -1) {
    return 'Edge'
  } else if (userAgent.indexOf('Firefox') > -1) {
    return 'Firefox'
  } else if (
    userAgent.indexOf('Safari') > -1 &&
    userAgent.indexOf('Chrome') === -1
  ) {
    return 'Safari'
  } else if (
    userAgent.indexOf('Chrome') > -1 &&
    userAgent.indexOf('Safari') > -1
  ) {
    return 'Chrome'
  } else if (!!window.ActiveXObject || 'ActiveXObject' in window) {
    return 'IE>=11'
  } else {
    return 'Unkonwn'
  }
}
export function isLeapYear (year) {
  year = Number(year)
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    // 闰年
    return true
  } else {
    // 平年
    return false
  }
}

export default {
  checkRates,
  isNumber,
  _getAddIps,
  DATETYPE,
  mode,
  formatter,
  formatterDate,
  busOn,
  judgeDate,
  formatterFloat,
  regNumber,
  regFloat,
  formatDecamal,
  getCookie,
  setCookie,
  delCookie,
  messageNode,
  dealDateWithIn,
  formatterDateForStr,
  stringToDateTime,
  isLeapYear
}
