import XLSX from 'xlsx'

// 导出Excel文件
const ExportExcel = {
  exportExcel (headList, header, data, fileName, sheetName = 'Sheet1', beginRow = 0) {
    let ws = XLSX.utils.json_to_sheet(headList, {
      header: header,
      skipHeader: true,
      origin: beginRow,
      raw: true
    })
    let ws2 = XLSX.utils.sheet_add_json(ws, data,
      {
        header: header,
        skipHeader: true,
        origin: beginRow + 1
      })
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws2, sheetName)
    /* generate file and send to client */
    XLSX.writeFile(wb, fileName + '.xls')
  },
  createWsSheet (header, headList) {
    return XLSX.utils.json_to_sheet(headList, {
      header: header,
      skipHeader: true
    })
  },
  sheetAddJson (wsSheet, header, data, first) {
    let options = {
      header: header,
      skipHeader: true,
      origin: first ? 1 : -1
    }
    XLSX.utils.sheet_add_json(wsSheet, data, options)
  },
  exportAppendExcel (wsSheet, fileName, sheetName = 'Sheet1') {
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, wsSheet, sheetName)
    XLSX.writeFile(wb, fileName + '.xls')
  }
}

export default ExportExcel
