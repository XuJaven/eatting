export default {
  get UserToken () {
    return sessionStorage.getItem('token')
  },
  set UserToken (value) {
    sessionStorage.setItem('token', value)
  },
  get SystemId () {
    return sessionStorage.getItem('systemId')
  },
  set SystemId (value) {
    sessionStorage.setItem('systemId', value)
  },
  get UserCode () {
    return sessionStorage.getItem('userCode')
  },
  set UserCode (value) {
    sessionStorage.setItem('userCode', value)
  },
  get Code () {
    return sessionStorage.getItem('code')
  },
  set Code (value) {
    sessionStorage.setItem('code', value)
  },

  crumbList: [],
  get MyRouters () {
    let router = sessionStorage.getItem('myRouters')
    let routerArr = router && router.trim().length > 0 ? JSON.parse(router) : []
    return routerArr
  },
  set MyRouters (value) {
    sessionStorage.setItem('myRouters', value && typeof value === 'object' ? JSON.stringify(value) : JSON.stringify([]))
  },
  get SystemMenu () {
    let menus = sessionStorage.getItem('systemMenu')
    let menuArr = menus && menus.trim().length > 0 ? JSON.parse(menus) : []
    return menuArr
  },
  set SystemMenu (value) {
    sessionStorage.setItem('systemMenu', value && typeof value === 'object' ? JSON.stringify(value) : JSON.stringify([]))
  },
  // 标签页
  tagsList: [],
  // 缓存
  keepAliveArry: [],
  keepAliveIframeArry: [],
  nowIframeTag: '',
  // 当前页
  activeTag: '',
  // 菜单
  activeMenu: {
    activeIndex: '',
    isOpen: false
  },
  activeMenuTwo: {
    activeIndex: '',
    activeMenuIndex: '',
    isOpen: false
  },
  activeMenuThree: {
    activeIndex: '',
    activeMenuIndex: '',
    activeMenuTwoIndex: '',
    isOpen: false
  },
  // 隐藏
  insideOutSrc: [],
  get RedisSessionId () {
    return sessionStorage.getItem('redisSessionId')
  },
  set RedisSessionId (value) {
    sessionStorage.setItem('redisSessionId', value)
  },
  isSideShrink: false,
  tagDiv: '',
  showRouterView: true,
  refreshRouter: '',
  // 一进来访问的路由
  get otherView () {
    return sessionStorage.getItem('otherView')
  },
  // 主题
  systemTheme: '',
  // 客户
  globalPostParams: null,
  // 产品
  globalCustomer: null,
  globalCustomerPro: null,
  globalSensitiveCustomer: null,
  // 用户号码
  globalCustomerNumber: null,
  // 合同号
  globalCustomerAccount: null,
  get staffInfo () {
    let staff = sessionStorage.getItem('staffInfo')
    if (staff && staff !== undefined && staff !== 'undefined') {
      return JSON.parse(staff)
    } else {
      return null
    }
  },
  spinning: false,
  webContentHeight: null,
  menuItemIndex: 0,
  staffBaseInfoRight: [],
  // 头部查询数据，号码类型和号码
  get headParams () {
    let objValue = sessionStorage.getItem('sessionSearchObjValue')
    let objArr = sessionStorage.getItem('sessionSearchInputSelect')
    return {
      objValue: objValue,
      objAttr: objArr,
      objType: objArr !== '199' ? 3 : 6
    }
  },
  version: ''
}
