import http from '@/http'
import paramsUtils from '@/http/params'
import { message } from 'ant-design-vue'
const QUERY_TYPE = {
  STAFFID_TYPE: 1,
  STAFFCODE_TYPE: 2,
  STAFFORGID_TYPE: 3
}
let apiUrl = require('#/json/api.json')
// 获取用户查询信息
function _queryAccount (result) {
  let _params = JSON.parse(JSON.stringify(paramsUtils.params()))
  _params = paramsUtils.dealParams(_params, result, 1, 8, true, 8001200, 800121201)
  return http.post(apiUrl.getUrlCtrl, _params, ['帐户信息查询'])
}
/**
 *
 * @param value 值
 * @param objType 4 客户ID ， 16 客户编码， 17 身份证号
 * @param objType ignoreSensitive 是否忽略脱敏
 * @private
 */
function _queryCustomer (value, objType, ignoreSensitive) {
  let _params = JSON.parse(JSON.stringify(paramsUtils.params()))
  _params.callParams.objValue = value
  let notProtectPrevail = _isExistBaseRight('800105005')
  if (notProtectPrevail) {
    _params.callParams.notProtectPrevail = 1
  }

  // 不忽略脱敏权限才进行判断
  if (!ignoreSensitive) {
    let sensitive = _isExistBaseRight('800105039')
    if (sensitive) {
      _params.callParams.sensitive = 1
    } else {
      _params.callParams.sensitive = 0
    }
  } else {
    _params.callParams.sensitive = 1
  }

  _dealInitParams(_params, objType, 8001111, 800111107)
  return http.post(apiUrl.getUrlCtrl, _params, ['客户信息查询'])
}
/**
 * @param objValue 合同号或者是帐户标识
 * @param objType  1帐户标识，6合同号
 * @param ignoreSensitive true不校验脱敏
 * @private
 */
function _queryAccountInfo (objValue, objType, ignoreSensitive) {
  let _params = JSON.parse(JSON.stringify(paramsUtils.params()))
  _params.callParams.objValue = objValue
  let notProtectPrevail = _isExistBaseRight('800105005')
  if (notProtectPrevail) {
    _params.callParams.notProtectPrevail = 1
  }
  if (ignoreSensitive) {
    _params.callParams.sensitive = 1
  } else {
    let sensitive = _isExistBaseRight('800105039')
    if (sensitive) {
      _params.callParams.sensitive = 1 // 不脱敏
    } else {
      _params.callParams.sensitive = 0 // 脱敏
    }
  }

  _dealInitParams(_params, objType, 8001111, 800111108)
  return http.post(apiUrl.getUrlCtrl, _params, ['帐户信息查询'])
}
/**
 * @param val 需要拼接转化的数值
 * @private
 */
// function _makeObjNumber (val) {
//   debugger
//   const str = String(val)
//   if (str.length === 8 || str.length === 7) {
//     const areaCode = String(sessionStorage.getItem('staffInfo').areaCode)
//     if (str.indexOf('059') === 0 || str.indexOf('59') === 1) {
//       if (areaCode !== '0590') {
//         return areaCode + str
//       }
//     }
//   }
//   return str
// }
/**
 * @param objType 1帐户标识，2产品实例id，3用户号码, 4 客户ID
 * @param objValue 号码值、或帐户标识、或产品实例id
 * @param qryType （objType = 3 时有效 ）0再用，1停用
 * @param objAttr （objType = 3 时有效 ）号码类型 ，0-固话，1-小灵通, 2-移动, 3-宽带, 4-智能公话, 5-互联星空, 6-天翼高清, 99-未知
 * @private
 */
function _queryProduct (result, type, inputPageObject) {
  let _params = JSON.parse(JSON.stringify(paramsUtils.params()))
  _params.callParams.objType = result.params.objType
  _params.callParams.objValue = result.params.objValue
  _params.callParams.objAttr = result.params.objAttr
  /* if (result.params.areaCode && result.params.areaCode !== '') {
    _params.callParams.areaCode = result.params.areaCode
  } */
  if (inputPageObject) {
    _params.callParams.inputPageObject = inputPageObject
  }

  // let latnId = _queryLatnId()
  // if (latnId) {
  //   _params.callParams.qryLatnId = latnId
  // }
  let sensitive = _isExistBaseRight('800105039')
  if (sensitive) {
    _params.callParams.sensitive = 1
  } else {
    _params.callParams.sensitive = 0
  }
  if (type === 1) {
    _params.callParams.needDownTimeState = 1
  }
  let number = ''
  let msgType = ''
  if (result.params.objType === 3 || result.params.objType === '3') {
    // _params.callParams.objValue = _makeObjNumber(_params.callParams.objValue)
    number = result.params.objValue
    msgType = '（用户号）'
  } else if (result.params.objType === 1 || result.params.objType === '1') {
    number = result.params.objValue
    msgType = '（帐户标识）'
  } else if (result.params.objType === 2 || result.params.objType === '2') {
    msgType = '（产品实例）'
  } else if (result.params.objType === 4 || result.params.objType === '4') {
    msgType = '（客户编码）'
  }

  if ((result.params.objType === 3 || result.params.objType === '3') || (result.params.objType === 1 || result.params.objType === '1')) {
    // _params.callParams.queryType = result.params.qryType
    _params.callParams.qryType = result.params.qryType
  } else {
    _params.callParams.qryType = 0
    // _params.callParams.queryType = 0
  }
  // if (_params.callParams.queryType === undefined || _params.callParams.queryType === null) {
  //   _params.callParams.queryType = 0
  // }
  let notProtectPrevail = _isExistBaseRight('800105008')
  if (notProtectPrevail) {
    _params.callParams.notProtectPrevail = 1
    let areaCode = sessionStorage.getItem('sessionSearchLatndSelect')
    if (areaCode && areaCode !== 'null') {
      _params.callParams.areaCode = areaCode
    }
  } else {
    // _params.callParams.areaCode = '0' + Number(store.state.staffInfo.areaCode)
    // _params.callParams.areaCode = _queryLatnId()
    _params.callParams.areaCode = sessionStorage.getItem('sessionSearchLatndSelect')
  }

  _dealInitParams(_params, result.params.objType, 8001111, 800111109)
  return http.post(apiUrl.getUrlCtrl, _params, ['产品信息查询' + msgType, number]).then(result => {
    const { resultCode } = result
    if (Number(resultCode) !== 0) {
      return Promise.resolve(result)
    } else {
      return Promise.resolve(result)
    }
  })
}

function _queryProductByNumber (result, qryType) {
  let _params = JSON.parse(JSON.stringify(paramsUtils.params()))
  _params.callParams.objType = result.params.objType
  _params.callParams.objValue = result.params.objValue
  _params.callParams.objAttr = result.params.objAttr
  let latnId = _queryLatnId()
  if (latnId) {
    _params.callParams.qryLatnId = latnId
  }
  let notProtectPrevail = _isExistBaseRight('800105008')
  if (notProtectPrevail) {
    _params.callParams.notProtectPrevail = 1
    let areaCode = sessionStorage.getItem('sessionSearchLatndSelect')
    if (areaCode && areaCode !== 'null') {
      _params.callParams.areaCode = areaCode
    }
  } else {
    // _params.callParams.areaCode = '0' + Number(store.state.staffInfo.areaCode)
    _params.callParams.areaCode = sessionStorage.getItem('sessionSearchLatndSelect')
  }
  let number = ''
  let msgType = ''
  if (result.params.objType === '3' || result.params.objType === 3) {
    number = result.params.objValue
    msgType = '（用户号）'
  } else if (result.params.objType === '1' || result.params.objType === 1) {
    number = result.params.objValue
    msgType = '（帐户标识）'
  } else if (result.params.objType === '2' || result.params.objType === 2) {
    msgType = '（产品实例）'
  }
  if (result.params.objType === 3 || result.params.objType === '3') {
    _params.callParams.qryType = result.params.qryType
  } else {
    _params.callParams.qryType = null
  }
  _dealInitParams(_params, result.params.objType, 8001111, 800111109)
  return http.post(apiUrl.getUrlCtrl, _params, ['产品信息查询' + msgType, number]).then(result => {
    const { resultCode, resultMsg } = result
    if (Number(resultCode) !== 0) {
      if (_params.callParams.qryType === 1) {
        message.warning(resultMsg)
      }
      return Promise.resolve(result)
    } else {
      return Promise.resolve(result)
    }
  })
}

/**
 * 通过产品实例标识查询过往历史， 只限于查询历史使用
 * @param objValue
 * @param number
 * @private
 */
function _queryProductByProductInstId (objValue, number) {
  let _params = JSON.parse(JSON.stringify(paramsUtils.params()))
  // _params.callParams.objType = 2
  _params.callParams.objType = 4
  _params.callParams.objValue = objValue
  let latnId = _queryLatnId()
  if (latnId) {
    _params.callParams.qryLatnId = latnId
  }
  let notProtectPrevail = _isExistBaseRight('800105008')
  if (notProtectPrevail) {
    _params.callParams.notProtectPrevail = 1
    let areaCode = sessionStorage.getItem('sessionSearchLatndSelect')
    if (areaCode && areaCode !== 'null') {
      _params.callParams.areaCode = areaCode
    }
  } else {
    // _params.callParams.areaCode = '0' + Number(store.state.staffInfo.areaCode)
    // _params.callParams.areaCode = _queryLatnId()
    _params.callParams.areaCode = sessionStorage.getItem('sessionSearchLatndSelect')
  }
  _params.callParams.qryType = 1
  _dealInitParams(_params, 4, 8001111, 800111109)
  return http.post(apiUrl.getUrlCtrl, _params, ['产品信息查询' + number]).then(result => {
    const { resultCode, resultMsg } = result
    if (Number(resultCode) !== 0) {
      if (_params.callParams.qryType === 1) {
        message.warning(resultMsg)
      }
      return Promise.resolve(result)
    } else {
      return Promise.resolve(result)
    }
  })
}
// 营业点列表获取
function _queryBusiness (level, id) {
  let _params = JSON.parse(JSON.stringify(paramsUtils.params()))
  _params.callParams.objValue = id
  _dealInitParams(_params, level, 8001050, 800105003)
  return http.post(apiUrl.getUrlCtrl, _params, ['获取营业点树服务'])
}

// 银行树列表查询
function _queryBankTree (curNodeLevel, curNodeId) {
  let _params = JSON.parse(JSON.stringify(paramsUtils.params()))
  _params.callParams.curNodeLevel = curNodeLevel
  _params.callParams.curNodeId = curNodeId
  _dealInitParams(_params, '', 8001902, 800190208)
  return http.post(apiUrl.getUrlCtrl, _params, ['托收银行信息查询'])
}

// 调帐帐目树列表获取
function _qryAcctTree (curNodeLevel, curAcctItemTypeId) {
  let _params = JSON.parse(JSON.stringify(paramsUtils.params()))
  _params.callParams.curNodeLevel = curNodeLevel
  _params.callParams.curAcctItemTypeId = curAcctItemTypeId
  _dealInitParams(_params, '', 8001801, 800180105)
  return http.post(apiUrl.getUrlCtrl, _params, ['调帐帐目信息查询'])
}
// 营业员
function _queryAssistant (qryType, value1, value2) {
  let _params = JSON.parse(JSON.stringify(paramsUtils.params()))
  if (QUERY_TYPE.STAFFID_TYPE === qryType) {
    _params.callParams.staffId = value1
  } else if (QUERY_TYPE.STAFFCODE_TYPE === qryType) {
    _params.callParams.staffCode = value1
  } else if (QUERY_TYPE.STAFFORGID_TYPE === qryType) {
    _params.callParams.sysUserCode = value1
  }
  _params.callParams.orgId = value2
  _params.callParams.qryType = qryType
  _dealInitParams(_params, null, 8001050, 800105002)
  return http.post(apiUrl.getUrlCtrl, _params, ['获取营业员信息服务'])
}
function _dealInitParams (params, objType, funcRightId, infoRightId) {
  params.funcRightId = funcRightId
  params.infoRightId = infoRightId
  params.callService = true
  if (objType !== '') {
    params.callParams.objType = objType
  }
  if (!params.callParams.tcpCont) {
    params.callParams.tcpConttransactionId = null
    params.callParams.tcpContserviceCode = null
  }
  params.callParams.tcpConttransactionId = new Date().getTime()
  params.callParams.tcpContserviceCode = 31231
}
function _dealBusinessTreeNodes (data) {
  let returnData = []
  if (data && data.length > 0) {
    data.forEach((item, index) => {
      let node = _createTreeNode(item)
      returnData.push(node)
    })
  }
  return returnData
}

/**
 * 信息权获取
 * @param rightId
 * @private
 */
function _getButton (rightId) {
  let _params = JSON.parse(JSON.stringify(paramsUtils.params()))
  _params.callService = true
  _params.funcRightId = rightId
  return http.post(apiUrl.getButtonUrl, _params, ['信息权获取'])
}
function _returnNode (value, nodes) {
  let node = null
  nodes.forEach(item => {
    if (!node) {
      if (item.key === value) {
        node = item
      } else if (item.children && item.children.length > 0 && item.children[0].title !== '等待加载') {
        node = _returnNode(value, item.children)
      }
    } else {
      return true
    }
  })
  return node
}

/**
 * 余额欠费查询
 * @param result
 * @private
 */
function _queryAcctOwe (acctId, forceFlush, number) {
  let _params = JSON.parse(JSON.stringify(paramsUtils.params()))
  _params.callService = true
  _params.funcRightId = 8001060
  _params.infoRightId = 800131102
  _params.callParams.acctId = acctId
  _params.callParams.forceFlush = forceFlush
  // _params.callParams.objType = 1
  // _params.callParams.objAttr = 55
  return http.post(apiUrl.getUrlCtrl, _params, ['余额欠费查询', number])
}

// 支付查询
function _queryPay (bussinessType, orderId) {
  const api = require('#/json/api.json')
  let _params = JSON.parse(JSON.stringify(paramsUtils.params()))
  _params.callParams.orderId = orderId
  _params.callParams.bussinessType = bussinessType
  _params.funcRightId = 8004101
  _params.infoRightId = 800410101
  _params.callService = true
  return http.post(api.getUrlCtrl, _params, ['支付交易查询'])
}

/**
 * 查询余额类型
 * @private
 */
function _qryBalanceType () {
  let _params = JSON.parse(JSON.stringify(paramsUtils.params()))
  _params.funcRightId = 8001217
  _params.infoRightId = 800121701
  _params.callService = true
  return http.post(apiUrl.getUrlCtrl, _params, ['余额类型查询'])
}

function _queryLatnId () {
  let staffInfo = sessionStorage.getItem('staffInfo')
  if (isEmpty(staffInfo)) {
    return null
  }
  staffInfo = JSON.parse(staffInfo)
  let isExist = _isExistBaseRight('800105004')
  if (!isExist) {
    return staffInfo.latnId
  } else {
    return null
  }
}
function _createTreeNode (item) {
  let _isLeaf = !item.isLeaf
  let node = {
    title: item.nodeName,
    key: item.nodeId.toString(),
    value: item.nodeName + ' ' + ' (' + item.nodeId.toString() + ')',
    isLeaf: !_isLeaf,
    selectable: !_isLeaf,
    level: item.level,
    children: []
  }
  if (item.isLeaf === 0) {
    node.children = [{
      title: '等待加载',
      key: item.nodeId + 'a',
      value: item.nodeId + 'a',
      isLeaf: !_isLeaf,
      disabled: true
    }]
  }
  return node
}

/**
 * 是否有权限
 * @param right
 * @returns {*}
 * @private
 */
function _isExistBaseRight (right) {
  let staffBaseInfo = sessionStorage.getItem('staffBaseInfo')
  if (isEmpty(staffBaseInfo)) {
    return false
  }
  staffBaseInfo = JSON.parse(staffBaseInfo)
  let isExist = staffBaseInfo.some(item => {
    return item.rightId === right
  })
  return isExist
}
function isEmpty (value) {
  if (value) {
    return false
  }
  if (value === 'null' || value === 'undefined') {
    return true
  }
  return true
}

/***
 * 获取组织树
 * @param level
 * @param id
 * @private
 */
function _queryOrg (level, id, keyName) {
  let _params = JSON.parse(JSON.stringify(paramsUtils.params()))
  _params.callParams.curNodeLevel = level
  _params.callParams.curNodeId = id
  if (keyName) {
    _params.callParams.keyName = keyName
  }

  _params.callParams.inputPageObject.pageNumber = 1
  _params.callParams.inputPageObject.recordNumber = 50
  _params.funcRightId = '8001050'
  _params.infoRightId = '800105007'
  _params.callService = true
  return http.post(apiUrl.getUrlCtrl, _params, ['获取组织树'])
}
function _onSearchB (level, id, keyName) {
  let _params = JSON.parse(JSON.stringify(paramsUtils.params()))
  _params.callParams.objType = level
  _params.callParams.objValue = id
  if (keyName) {
    _params.callParams.keyName = keyName
  }
  _params.funcRightId = 8001050
  _params.infoRightId = 800105013
  _params.callService = true
  return http.post(apiUrl.getUrlCtrl, _params, ['获取营业点树'])
}
export default {
  _queryProduct,
  _queryCustomer,
  _queryAccount,
  _queryBusiness,
  _queryAssistant,
  QUERY_TYPE,
  _dealBusinessTreeNodes,
  _queryProductByNumber,
  _returnNode,
  _queryAccountInfo,
  _getButton,
  _queryBankTree,
  _qryAcctTree,
  _queryAcctOwe,
  _qryBalanceType,
  _queryPay,
  _isExistBaseRight,
  _queryOrg,
  _createTreeNode,
  _queryProductByProductInstId,
  _onSearchB
}
