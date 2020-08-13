export function getBrowserInfo () {
  var agent = navigator.userAgent.toLowerCase()
  var ie = /msie [\d.]+;/gi
  var firefox = /firefox\/[\d.]+/gi
  var chrome = /chrome\/[\d.]+/gi
  var safari = /safari\/[\d.]+/gi
  // IE
  if (agent.indexOf('msie') > 0) {
    return agent.match(ie)
  }
  // firefox
  if (agent.indexOf('firefox') > 0) {
    return agent.match(firefox)
  }
  // Chrome
  if (agent.indexOf('chrome') > 0) {
    return agent.match(chrome)
  }
  // Safari
  if (agent.indexOf('safari') > 0 && agent.indexOf('chrome') < 0) {
    return agent.match(safari)
  }
}

export function getSysOSInfo () {
  var sUserAgent = navigator.userAgent
  var isWin = (navigator.platform === 'Win32') || (navigator.platform === 'Windows')
  var isMac = (navigator.platform === 'Mac68K') || (navigator.platform === 'MacPPC') || (navigator.platform === 'Macintosh') || (navigator.platform === 'MacIntel')
  if (isMac) return 'Mac'
  var isUnix = (navigator.platform === 'X11') && !isWin && !isMac
  if (isUnix) return 'Unix'
  var isLinux = (String(navigator.platform).indexOf('Linux') > -1)
  if (isLinux) return 'Linux'
  if (isWin) {
    var isWin2K = sUserAgent.indexOf('Windows NT 5.0') > -1 || sUserAgent.indexOf('Windows 2000') > -1
    if (isWin2K) return 'Win2000'
    var isWinXP = sUserAgent.indexOf('Windows NT 5.1') > -1 || sUserAgent.indexOf('Windows XP') > -1
    if (isWinXP) return 'WinXP'
    var isWin2003 = sUserAgent.indexOf('Windows NT 5.2') > -1 || sUserAgent.indexOf('Windows 2003') > -1
    if (isWin2003) return 'Win2003'
    var isWinVista = sUserAgent.indexOf('Windows NT 6.0') > -1 || sUserAgent.indexOf('Windows Vista') > -1
    if (isWinVista) return 'WinVista'
    var isWin7 = sUserAgent.indexOf('Windows NT 6.1') > -1 || sUserAgent.indexOf('Windows 7') > -1
    if (isWin7) return 'Win7'
    var isWin10 = sUserAgent.indexOf('Windows NT 10.0') > -1 || sUserAgent.indexOf('Windows 10') > -1
    if (isWin10) return 'Win10'
  }
  return 'None'
}

export default { getBrowserInfo, getSysOSInfo }
