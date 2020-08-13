import tools from '../assets/utils/tools.js'
export default {
  // 登录
  LOGIN_IN (state, token) {
    state.UserToken = token
  },
  // 退出登录
  LOGIN_OUT (state) {
    sessionStorage.setItem('token', '')
    sessionStorage.setItem('systemId', '')
    sessionStorage.setItem('sessionTag', [])
    sessionStorage.setItem('otherView', '')
    sessionStorage.setItem('code', '')
    sessionStorage.setItem('userCode', '')
    sessionStorage.setItem('redisSessionId', '')
    sessionStorage.setItem('staffInfo', '')
    sessionStorage.setItem('sessionSearchObjValue', '')
    sessionStorage.setItem('sessionSearchInputSelect', '')
    sessionStorage.setItem('activeMenu', '')
    sessionStorage.setItem('activeMenuTwo', '')
    sessionStorage.setItem('activeMenuThree', '')
    sessionStorage.setItem('staffBaseInfo', '')
    sessionStorage.setItem('writeLogLevel', '')
    tools.delCookie('shuntappversion')
    state.tagsList = []
    state.staffBaseInfoRight = []
  },
  TOGGLE_NAV_CPLLAPSE (state) {
    state.isSidebarNavCollapse = !state.isSidebarNavCollapse
  },
  SET_CRUM (state, list) {
    state.crumbList = list
  },
  SYTTEM_IN (state, systemId) {
    state.SystemId = systemId
  },
  HAS_LOADER_ROUTER (state) {
    state.hasLoadRouter = true
  },
  ADD_ROUTERS (state, routers) {
    state.MyRouters = routers
  },
  SET_MENU (state, menu) {
    state.SystemMenu = menu
  },
  CLEAR_MENU (state) {
    state.SystemMenu = []
  },
  // 添加标签
  ADD_TAG (state, tagItem) {
    if (state.tagsList.length === 0) {
      let loadSessionTag = sessionStorage.getItem('sessionTag')
      if (loadSessionTag) {
        state.tagsList = JSON.parse(loadSessionTag)
      } else {
        // 首页不允许关闭
        state.tagsList.push({
          title: '首页',
          path: '/Console',
          name: 'Console'
        })
      }
    }
    const isExist = state.tagsList.some(item => {
      return item.title === tagItem.title
    })
    if (!isExist) {
      state.tagsList.push(tagItem)
    }
    let activeTag = JSON.stringify(state.tagsList)
    sessionStorage.setItem('sessionTag', activeTag)
  },
  //  移除所有标签
  REMOVE_ALL_TAG (state) {
    state.tagsList = [state.tagsList[0]]
    state.activeMenu.activeIndex = ''
    state.activeMenu.isOpen = false
    state.activeMenuTwo.activeIndex = ''
    state.activeMenuTwo.isOpen = false
    state.activeMenuThree.activeIndex = ''
    state.activeMenuThree.isOpen = false
    state.activeTag = state.tagsList[0]
    state.keepAliveArry = ['Console']
    state.keepAliveIframeArry = []
    sessionStorage.setItem('activeMenu', '')
    sessionStorage.setItem('activeMenuTwo', '')
    sessionStorage.setItem('activeMenuThree', '')
  },
  // 移除其他标签
  REMOVE_OTHER_TAG (state, tagItem) {
    state.tagsList = [state.tagsList[0], tagItem]
    state.activeTag = tagItem
    state.activeMenuThree.activeIndex = state.activeTag.title
    state.activeMenuThree.isOpen = true
    let newKeepAliveArry = []
    state.keepAliveArry.some((item, index) => {
      if (item === tagItem.name) {
        newKeepAliveArry.push(item)
      }
    })
    newKeepAliveArry.push('Console')
    state.keepAliveArry = newKeepAliveArry
    state.keepAliveIframeArry.some((item, index) => {
      if (item.title === tagItem.title) {
        item.isReload = true
      }
    })
  },
  // 移除当前标签
  REMOVE_TAG (state, tagItem) {
    let cons = []
    let tagIndex = -1
    state.tagsList.forEach((item, index) => {
      if (item.title === tagItem.title) {
        tagIndex = index
      } else {
        cons.push(item)
      }
    })
    state.tagsList = cons
    let openNextTag = ''
    if (tagItem.title === state.activeTag.title) {
      if (tagIndex > cons.length) {
        openNextTag = cons[cons.length]
      } else if (tagIndex === cons.length) {
        openNextTag = cons[tagIndex - 1]
      } else {
        openNextTag = cons[tagIndex]
      }
      state.activeTag = openNextTag
      state.activeMenuThree.activeIndex = state.activeTag.title
      state.activeMenuThree.isOpen = true
    }
    let newKeepAliveArry = []
    state.keepAliveArry.some((item, index) => {
      if (item !== tagItem.name) {
        newKeepAliveArry.push(item)
      }
    })
    state.keepAliveArry = newKeepAliveArry
    state.keepAliveIframeArry.some((item, index) => {
      if (item.title === tagItem.title) {
        item.isReload = true
      }
    })
  },
  // 设置当前打开标签
  SET_ACTIVE_TAG (state, tag) {
    state.activeTag = tag
    sessionStorage.setItem('pageName', tag.title)
  },
  // 设置选中的以及菜单
  SET_ACTICE_MENU (state, menuName) {
    let activeMenu = state.activeMenu
    if (menuName === activeMenu.activeIndex && !activeMenu.isOpen) {
      activeMenu.isOpen = true
    } else if (menuName !== activeMenu.activeIndex) {
      activeMenu.activeIndex = menuName
      activeMenu.isOpen = true
    } else {
      activeMenu.isOpen = false
    }
    state.activeMenu = activeMenu
    sessionStorage.setItem('activeMenu', JSON.stringify(activeMenu))
  },
  // 设置选中二级菜单
  SET_ACTICE_MENU_TWO (state, menu) {
    let activeMenuTwo = state.activeMenuTwo
    if (menu.activeIndex === activeMenuTwo.activeIndex && !activeMenuTwo.isOpen) {
      activeMenuTwo.isOpen = true
    } else if (menu.activeIndex !== activeMenuTwo.activeIndex) {
      activeMenuTwo.activeIndex = menu.activeIndex
      activeMenuTwo.activeMenuIndex = menu.levelOneMenu
      activeMenuTwo.isOpen = true
    } else {
      activeMenuTwo.isOpen = false
    }
    state.activeMenuTwo = activeMenuTwo
    sessionStorage.setItem('activeMenuTwo', JSON.stringify(activeMenuTwo))
  },
  // 设置选中三级菜单
  SET_ACTICE_MENU_THREE (state, menu) {
    let activeMenuThree = state.activeMenuThree
    if (menu.activeIndex === activeMenuThree.activeIndex && !activeMenuThree.isOpen) {
      activeMenuThree.isOpen = true
    } else if (menu.activeIndex !== activeMenuThree.activeIndex) {
      activeMenuThree.activeIndex = menu.activeIndex
      activeMenuThree.activeMenuIndex = menu.levelOneMenu
      activeMenuThree.activeMenuTwoIndex = menu.levelTwoMenu
      activeMenuThree.isOpen = true
    } else {
      activeMenuThree.isOpen = false
    }
    state.activeMenuThree = activeMenuThree
    sessionStorage.setItem('activeMenuThree', JSON.stringify(activeMenuThree))
  },
  SET_SIDE_SHRINK (state) {
    if (state.isSideShrink) {
      state.isSideShrink = false
    } else {
      state.isSideShrink = true
    }
  },
  SET_TAG_DIV (state, value) {
    state.tagDiv = value
  },
  // 添加缓存组件
  SET_KEEP_ALIVE_ARRY (state, name) {
    const isExist = state.keepAliveArry.some(item => {
      return item === name
    })
    if (!isExist) {
      state.keepAliveArry.push(name)
    }
  },
  // 移除缓存组件
  REMOVE_KEEP_ALIVE_ARRY (state, name) {
    let newKeepAliveArry = []
    state.keepAliveArry.some((item, index) => {
      if (item !== name) {
        newKeepAliveArry.push(item)
      }
    })
    state.keepAliveArry = newKeepAliveArry
  },
  SET_KEEP_ALIVE_IFRAME_ARRY (state, tagItem) {
    const isExist = state.keepAliveIframeArry.some(item => {
      return item.title === tagItem.title
    })
    if (!isExist) {
      state.keepAliveIframeArry.push(tagItem)
    }
  },
  REMOVE_KEEP_ALIVE_IFRAME_ARRY (state, name) {
    state.keepAliveIframeArry.some((item, index) => {
      if (item.title === name) {
        item.isReload = true
      }
    })
  },
  SET_NOW_TAG_IFRAME (state, item) {
    state.nowIframeTag = item
  },
  SET_SHOW_ROUTER (state, isShow) {
    state.showRouterView = isShow
  },
  SET_REFRESHTOUTER (state, value) {
    state.refreshRouter = value
  },
  SET_OTHER_VIEW (state, value) {
    state.otherView = value
  },
  SET_INSIDEOUT_SRC (state, value) {
    state.insideOutSrc = value
  },
  SET_SYSTEM_THEME (state, value) {
    state.systemTheme = 'layout-admin-theme' + value
  },

  // 设置全局查询用户的信息
  SET_GLOBAL_CUSTOMER (state, value) {
    state.globalCustomer = value
  },
  SET_GLOBAL_CUSTOMER_NUMBER (state, value) {
    state.globalCustomerNumber = value
  },
  SET_GLOBAL_CUSTOMER_ACCOUNT (state, value) {
    state.globalCustomerAccount = value
  },
  SET_GLOBAL_POST_PARAMS (state, value) {
    state.globalPostParams = value
  },
  SET_GLOBAL_CUSTOMER_PRO (state, value) {
    state.globalCustomerPro = value
  },
  // 设置全局查询用户的信息
  SET_GLOBAL_NoSENSITIVE_CUSTOMER (state, value) {
    state.globalSensitiveCustomer = value
  },
  SET_WEB_CONTENT_HEIGHT (state, value) {
    state.webContentHeight = value
  },
  SET_MENU_INIT_INDEX (state) {
    state.menuItemIndex = state.menuItemIndex + 1
  },
  SET_SESSION_SELLECT (state, value) {
    sessionStorage.setItem('sessionSearchObjValue', value[0])
    sessionStorage.setItem('sessionSearchInputSelect', value[1])
    sessionStorage.setItem('sessionSearchLatndSelect', value[2])
  },
  // 清除GLOBAL数据
  CLEAR_GLOBAL_PARAMS (state) {
    state.globalCustomer = null
    state.globalCustomerNumber = null
    state.globalCustomerAccount = null
    state.globalPostParams = null
    state.globalCustomerPro = null
    state.webContentHeight = null
    state.globalSensitiveCustomer = null
  },
  SET_STAFF_BASE_INFORIGHT (state, value) {
    state.staffBaseInfoRight = value
    sessionStorage.setItem('staffBaseInfo', JSON.stringify(value))
  },
  SET_VERSION (state, value) {
    state.version = value
  }
}
