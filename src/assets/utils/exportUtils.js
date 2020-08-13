// JSON转Excel导出
const ExportUtils = {
  // 使用方法示例
  jsonToExcel (fileName, headList, data, title, worksheet = 'worksheet') {
    // 生成带顺序的列头和对应的字段集合
    let headTitle = []
    let headSource = []
    for (let i = 0; i < headList.length; i++) {
      headTitle.push(headList[i].title)
      headSource.push(headList[i].source)
    }

    // 先转化json
    let arrData = typeof data !== 'object'
      ? JSON.parse(data)
      : data

    // 生成内容
    let excel = '<table>'
    // 标题信息
    if (title !== '') {
      excel += '<tr><td>' + title + '</td></tr>'
    }
    // 设置列头
    let row = '<tr>'
    for (let i = 0; i < headTitle.length; i++) {
      row += '<td>' + headTitle[i] + '</td>'
    }
    // 换行
    excel += row + '</tr>'
    // 设置数据
    for (let i = 0; i < arrData.length; i++) {
      let row = '<tr>'
      for (let j = 0; j < headSource.length; j++) {
        if (arrData[i][headSource[j]] != null) {
          row += '<td style="mso-number-format:\'\\@\';">' + arrData[i][headSource[j]] + '</td>'
        } else {
          row += '<td></td>'
        }
      }
      excel += row + '</tr>'
    }
    excel += '</table>'
    let excelFile = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">'
    excelFile += '<meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">'
    excelFile += '<meta http-equiv="content-type" content="application/vnd.ms-excel'
    excelFile += '; charset=UTF-8">'
    excelFile += '<head>'
    excelFile += '<!--[if gte mso 9]>'
    excelFile += '<xml>'
    excelFile += '<x:ExcelWorkbook>'
    excelFile += '<x:ExcelWorksheets>'
    excelFile += '<x:ExcelWorksheet>'
    excelFile += '<x:Name>'
    excelFile += worksheet
    excelFile += '</x:Name>'
    excelFile += '<x:WorksheetOptions>'
    excelFile += '<x:DisplayGridlines/>'
    excelFile += '</x:WorksheetOptions>'
    excelFile += '</x:ExcelWorksheet>'
    excelFile += '</x:ExcelWorksheets>'
    excelFile += '</x:ExcelWorkbook>'
    excelFile += '</xml>'
    excelFile += '<![endif]-->'
    excelFile += '</head>'
    excelFile += '<body>'
    excelFile += excel
    excelFile += '</body>'
    excelFile += '</html>'

    let uri = 'data:application/vnd.ms-excel;charset=utf-8,' + encodeURIComponent(excelFile)

    let link = document.createElement('a')
    link.href = uri

    link.style = 'visibility:hidden'
    link.download = fileName + '.xls'
    document.body.appendChild(link)
    link.click()
    document
      .body
      .removeChild(link)
  }
}
export default ExportUtils
