import { getLodop } from '../../assets/utils/lodop/LodopFuncs'

// 托收凭证默认位置
let form5BL = {
  'pageW': 227,
  'pageH': 120,
  'timeT': 50,
  'timeL': 310,
  'timeW': 60,
  'typeT': 75,
  'typeL': 234,
  'payAcctNameT': 105,
  'payAcctNameL': 124,
  'payAcctNameW': 250,
  'telBankAcctNameT': 146,
  'telBankAcctNameL': 556,
  'telBankAcctNameW': 90,
  'useBankNameT': 146,
  'useBankNameL': 282,
  'useBankNameW': 90,
  'payBankAcctT': 126,
  'payBankAcctL': 124,
  'payBankAcctW': 250,
  'payPrivT': 152,
  'payPrivL': 134,
  'payPrivW': 64,
  'telBankAccoutNameT': 105,
  'telBankAccoutNameL': 406,
  'telBankAccoutNameW': 250,
  'telcomBankAcctT': 126,
  'telcomBankAcctL': 406,
  'telcomBankAcctW': 250,
  'telPrivT': 152,
  'telPrivL': 406,
  'telPrivW': 64,
  'AmountBT': 178,
  'AmountBL': 150,
  'AmountBW': 200,
  'AmountT': 189,
  'AmountL': 619,
  'AmountW': 16,
  'agerementT': 220,
  'agerementL': 106,
  'agerementW': 136,
  'billCycleT': 266,
  'billCycleL': 114,
  'billCycleW': 129
}
// 同城托收默认位置
let form5BA = {
  'pageW': 227,
  'pageH': 120,
  'timeT': 50,
  'timeL': 273,
  'timeW': 60,
  'payAcctNameT': 82,
  'payAcctNameL': 136,
  'payAcctNameW': 200,
  'telBankAcctNameT': 139,
  'telBankAcctNameL': 436,
  'telBankAcctNameW': 200,
  'useBankNameT': 139,
  'useBankNameL': 136,
  'useBankNameW': 200,
  'payBankAcctT': 110,
  'payBankAcctL': 136,
  'payBankAcctW': 200,
  'telBankAccoutNameT': 82,
  'telBankAccoutNameL': 436,
  'telBankAccoutNameW': 200,
  'telcomBankAcctT': 110,
  'telcomBankAcctL': 436,
  'telcomBankAcctW': 200,
  'AmountBT': 172,
  'AmountBL': 144,
  'AmountBW': 200,
  'AmountT': 172,
  'AmountL': 472,
  'AmountW': 200,
  'agerementT': 210,
  'agerementL': 105,
  'agerementW': 200,
  'billCycleT': 240,
  'billCycleL': 130,
  'billCycleW': 200
}
/**
 * @param {*} printDetailAlls 打印数据
 * @param {*} billType 打单类型
 * @param {*} printLatnId 本地网
 * @param {*} timePrint 打印时间
 */

const _printByLodop = (printDetailAlls, billType, printLatnId, timePrint) => {
  // 托收凭证、同城托收自定义位置
  const form5BLSelf = JSON.parse(localStorage.getItem('printSetForm5BL'))
  const form5BASelf = JSON.parse(localStorage.getItem('printSetForm5BA'))
  if (billType === '5BL') { // 托收凭证
    if (form5BLSelf) {
      form5BL = form5BLSelf
    }
  } else if (billType === '5BA') { // 同城托收
    if (form5BASelf) {
      form5BA = form5BASelf
    }
  }
  let LODOP = getLodop()
  LODOP.SET_PRINT_PAGESIZE(1, form5BL.pageW + 'mm', form5BL.pageH + 'mm', 'A4')
  LODOP.SET_PRINT_STYLE('FontSize', 9)
  LODOP.SET_PRINT_STYLE('Bold', 1)
  for (let j = 0; j < printDetailAlls.length; j++) {
    if (billType === '5BL') { // 托收凭证
      CreateOnePageBy5BLAll(printDetailAlls[j], LODOP, timePrint)
    } else { // 同城委托
      CreateOnePage(printDetailAlls[j], LODOP, timePrint)
    }
    LODOP.SET_PRINT_MODE('CUSTOM_TASK_NAME', '托收单' + j)// 为每个打印单独设置任务名
    LODOP.SET_PRINTER_INDEX(0)
    LODOP.PRINT()
  }
}
// 设置位置，托收凭证
function CreateOnePageBy5BLAll (item, LODOP, timePrint) {
  // 打钩
  LODOP.ADD_PRINT_TEXT(form5BL.typeT, form5BL.typeL, 25, 20, '√')
  // 日期
  LODOP.ADD_PRINT_TEXT(form5BL.timeT, form5BL.timeL, form5BL.timeW, 20, timePrint.year)
  LODOP.ADD_PRINT_TEXT(form5BL.timeT, form5BL.timeL + 53, 30, 20, timePrint.month)
  LODOP.ADD_PRINT_TEXT(form5BL.timeT, form5BL.timeL + 96, 30, 20, timePrint.day)
  LODOP.ADD_PRINT_TEXT(35, 535, 100, 20, item['sendId'])
  // 全称
  LODOP.ADD_PRINT_TEXT(form5BL.payAcctNameT, form5BL.payAcctNameL, form5BL.payAcctNameW, 20, item['payAcctName'])
  LODOP.ADD_PRINT_TEXT(form5BL.telBankAccoutNameT, form5BL.telBankAccoutNameL, form5BL.telBankAccoutNameW, 20, item['telBankAccoutName'])
  LODOP.ADD_PRINT_TEXT(form5BL.payBankAcctT, form5BL.payBankAcctL, form5BL.payBankAcctW, 20, item['payBankAcct'])
  LODOP.ADD_PRINT_TEXT(form5BL.telcomBankAcctT, form5BL.telcomBankAcctL, form5BL.telcomBankAcctW, 20, item['telcomBankAcct'])
  LODOP.SET_PRINT_STYLE('FontSize', 7)
  LODOP.ADD_PRINT_TEXT(form5BL.payPrivT, form5BL.payPrivL, form5BL.payPrivW, 20, item['payPriv'])
  LODOP.ADD_PRINT_TEXT(form5BL.payPrivT, form5BL.payPrivL + 52, form5BL.payPrivW, 20, item['payCity'])
  LODOP.ADD_PRINT_TEXT(form5BL.useBankNameT, form5BL.useBankNameL, form5BL.useBankNameW, 20, item['useBankName'])
  LODOP.ADD_PRINT_TEXT(form5BL.telPrivT, form5BL.telPrivL, form5BL.telPrivW, 20, item['telPriv'])
  LODOP.ADD_PRINT_TEXT(form5BL.telPrivT, form5BL.telPrivL + 52, form5BL.telPrivW, 20, item['telCity'])
  LODOP.ADD_PRINT_TEXT(form5BL.telBankAcctNameT, form5BL.telBankAcctNameL, form5BL.telBankAcctNameW, 20, item['telBankAcctName'])
  // 金额
  LODOP.SET_PRINT_STYLE('FontSize', 9)
  LODOP.ADD_PRINT_TEXT(form5BL.AmountBT, form5BL.AmountBL, form5BL.AmountBW, 25, item['AmountB'])
  let tmp = item['Amount'] + ''
  if (tmp.length === 11) {
    LODOP.ADD_PRINT_TEXT(form5BL.AmountT, 510, 200, 20, '￥')
  } else {
    tmp = '￥' + tmp
  }
  let array = tmp.split('').reverse()
  for (let i = 0; i < array.length; i++) {
    switch (i) {
    case 0: // 分
      LODOP.ADD_PRINT_TEXT(form5BL.AmountT, form5BL.AmountL, form5BL.AmountW, 20, array[i])
      break
    case 1:
      LODOP.ADD_PRINT_TEXT(form5BL.AmountT, form5BL.AmountL - form5BL.AmountW, form5BL.AmountW, 20, array[i])
      break
    case 2:
      LODOP.ADD_PRINT_TEXT(form5BL.AmountT, form5BL.AmountL - form5BL.AmountW * 2, form5BL.AmountW, 20, array[i])
      break
    case 3:
      LODOP.ADD_PRINT_TEXT(form5BL.AmountT, form5BL.AmountL - form5BL.AmountW * 3, form5BL.AmountW, 20, array[i])
      break
    case 4:
      LODOP.ADD_PRINT_TEXT(form5BL.AmountT, form5BL.AmountL - form5BL.AmountW * 4, form5BL.AmountW, 20, array[i])
      break
    case 5:
      LODOP.ADD_PRINT_TEXT(form5BL.AmountT, form5BL.AmountL - form5BL.AmountW * 5, form5BL.AmountW, 20, array[i])
      break
    case 6:
      LODOP.ADD_PRINT_TEXT(form5BL.AmountT, form5BL.AmountL - form5BL.AmountW * 6, form5BL.AmountW, 20, array[i])
      break
    case 7:
      LODOP.ADD_PRINT_TEXT(form5BL.AmountT, form5BL.AmountL - form5BL.AmountW * 7, form5BL.AmountW, 20, array[i])
      break
    case 8:
      LODOP.ADD_PRINT_TEXT(form5BL.AmountT, form5BL.AmountL - form5BL.AmountW * 8, form5BL.AmountW, 20, array[i])
      break
    case 9:
      LODOP.ADD_PRINT_TEXT(form5BL.AmountT, form5BL.AmountL - form5BL.AmountW * 9, form5BL.AmountW, 20, array[i])
      break
    case 10: // 符号
      LODOP.ADD_PRINT_TEXT(form5BL.AmountT, form5BL.AmountL - form5BL.AmountW * 10, form5BL.AmountW, 20, array[i])
      break
    }
  }
  LODOP.ADD_PRINT_TEXT(form5BL.agerementT, form5BL.agerementL, form5BL.agerementW, 20, item['agerement'])
  LODOP.ADD_PRINT_TEXT(form5BL.billCycleT, form5BL.billCycleL, form5BL.billCycleW, 43, item['billCycle'])
}
// 福州托收凭证
/* function CreateOnePageBy5BL (item, LODOP, timePrint) {
  Object.keys(item).forEach(key => {
    LODOP.SET_PRINT_STYLE('FontSize', 9)
    // 打钩
    LODOP.ADD_PRINT_TEXT(110, 300, 25, 20, '√')
    // 日期
    LODOP.ADD_PRINT_TEXT(80, 380, 60, 20, timePrint.year)
    LODOP.ADD_PRINT_TEXT(80, 433, 30, 20, timePrint.month)
    LODOP.ADD_PRINT_TEXT(80, 476, 30, 20, timePrint.day)
    switch (key) {
    // 委托号
    case 'sendId':
      LODOP.ADD_PRINT_TEXT(80, 595, 60, 20, item['sendId'])
      break
      // 全称
    case 'payAcctName':
      LODOP.ADD_PRINT_TEXT(137, 198, 250, 20, item['payAcctName'])
      break
    case 'telBankAccoutName':
      LODOP.ADD_PRINT_TEXT(137, 484, 250, 20, item['telBankAccoutName'])
      break
      // 帐号
    case 'payBankAcct':
      LODOP.ADD_PRINT_TEXT(161, 197, 250, 20, item['payBankAcct'])
      break
    case 'telcomBankAcct':
      LODOP.ADD_PRINT_TEXT(161, 484, 250, 20, item['telcomBankAcct'])
      break
      // 地址
    case 'payPriv':
      LODOP.ADD_PRINT_TEXT(186, 195, 64, 20, item['payPriv'])
      break
    case 'payCity':
      LODOP.ADD_PRINT_TEXT(186, 247, 64, 20, item['payCity'])
      break
    case 'useBankName':
      LODOP.SET_PRINT_STYLE('FontSize', 8)
      LODOP.ADD_PRINT_TEXT(186, 330, 200, 20, item['useBankName'])
      break
    case 'telPriv':
      LODOP.ADD_PRINT_TEXT(186, 470, 64, 20, item['telPriv'])
      break
    case 'telCity':
      LODOP.ADD_PRINT_TEXT(186, 520, 64, 20, item['telCity'])
      break
    case 'telBankAcctName':
      LODOP.SET_PRINT_STYLE('FontSize', 8)
      LODOP.ADD_PRINT_TEXT(186, 636, 200, 20, item['telBankAcctName'])
      break
    // 金额
    case 'AmountB':
      LODOP.ADD_PRINT_TEXT(218, 215, 263, 25, item['AmountB'])
      break
    case 'Amount':
      let tmp = item['Amount'] + ''
      if (tmp.length === 11) {
        LODOP.ADD_PRINT_TEXT(219, 510, 200, 20, '￥')
      } else {
        tmp = '￥' + tmp
      }
      let array = tmp.split('').reverse()

      for (let i = 0; i < array.length; i++) {
        switch (i) {
        case 0: // 分
          LODOP.ADD_PRINT_TEXT(219, 685, 17, 20, array[i])
          break
        case 1:
          LODOP.ADD_PRINT_TEXT(219, 668, 17, 20, array[i])
          break
        case 2:
          LODOP.ADD_PRINT_TEXT(219, 652, 16, 20, array[i])
          break
        case 3:
          LODOP.ADD_PRINT_TEXT(219, 636, 16, 20, array[i])
          break
        case 4:
          LODOP.ADD_PRINT_TEXT(219, 620, 16, 20, array[i])
          break
        case 5:
          LODOP.ADD_PRINT_TEXT(219, 605, 16, 20, array[i])
          break
        case 6:
          LODOP.ADD_PRINT_TEXT(219, 589, 17, 20, array[i])
          break
        case 7:
          LODOP.ADD_PRINT_TEXT(219, 576, 15, 20, array[i])
          break
        case 8:
          LODOP.ADD_PRINT_TEXT(219, 561, 14, 20, array[i])
          break
        case 9:
          LODOP.ADD_PRINT_TEXT(219, 545, 16, 20, array[i])
          break
        case 10: // 符号
          LODOP.ADD_PRINT_TEXT(219, 528, 200, 20, array[i])
          break
        }
      }
      break
    case 'agerement':
      LODOP.ADD_PRINT_TEXT(250, 176, 136, 20, item['agerement'])
      break
    case 600044:
      LODOP.ADD_PRINT_TEXT(250, 408, 140, 20, item[key])
      break
    case 6000045:
      LODOP.ADD_PRINT_TEXT(251, 620, 100, 20, item[key])
      break
    case 6:
      LODOP.ADD_PRINT_TEXT(272, 227, 100, 20, item[key])
      break
    case 4:
      LODOP.ADD_PRINT_TEXT(272, 591, 148, 20, item[key])
      break

    case 'billCycle':
      LODOP.ADD_PRINT_TEXT(306, 174, 129, 43, item['billCycle'])
      break
    case 600046:
      LODOP.ADD_PRINT_TEXT(272, 339, 100, 20, item[key])
      break
    }
  })
} */
// 莆田托收凭证594

// 福州同城委托
function CreateOnePage (item, LODOP, timePrint) {
  LODOP.ADD_PRINT_TEXT(form5BA.timeT, form5BA.timeL, form5BA.timeW, 20, timePrint.year)
  LODOP.ADD_PRINT_TEXT(form5BA.timeT, form5BA.timeL + 54, 50, 20, timePrint.month)
  LODOP.ADD_PRINT_TEXT(form5BA.timeT, form5BA.timeL + 100, 50, 20, timePrint.day)
  LODOP.ADD_PRINT_TEXT(form5BA.timeT, 522, 150, 20, item['sendId'])
  LODOP.ADD_PRINT_TEXT(form5BA.payAcctNameT, form5BA.payAcctNameL, form5BA.payAcctNameW, 20, item['payAcctName']) //
  LODOP.ADD_PRINT_TEXT(form5BA.telBankAccoutNameT, form5BA.telBankAccoutNameL, form5BA.telBankAccoutNameW, 20, item['telBankAccoutName']) //
  LODOP.ADD_PRINT_TEXT(form5BA.payBankAcctT, form5BA.payBankAcctL, form5BA.payBankAcctW, 20, item['payBankAcct']) //
  LODOP.ADD_PRINT_TEXT(form5BA.telcomBankAcctT, form5BA.telcomBankAcctL, form5BA.telcomBankAcctW, 20, item['telcomBankAcct'])
  LODOP.ADD_PRINT_TEXT(form5BA.useBankNameT, form5BA.useBankNameL, form5BA.useBankNameW, 20, item['useBankName']) //
  LODOP.ADD_PRINT_TEXT(form5BA.telBankAcctNameT, form5BA.telBankAcctNameL, form5BA.telBankAcctNameW, 20, item['telBankAcctName']) //
  LODOP.ADD_PRINT_TEXT(form5BA.AmountBT, form5BA.AmountBL, form5BA.AmountBW, 20, item['AmountB'])
  LODOP.ADD_PRINT_TEXT(form5BA.AmountT, form5BA.AmountL, form5BA.AmountW, 20, '￥' + (Number(item['Amount']) / 100).toFixed(2))
  LODOP.ADD_PRINT_TEXT(form5BA.agerementT, form5BA.agerementL, form5BA.agerementW, 20, item['agerement'])
  LODOP.ADD_PRINT_TEXT(form5BA.billCycleT, form5BA.billCycleL, form5BA.billCycleW, 43, item['billCycle'])
}

export {
  _printByLodop
}
