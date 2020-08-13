function setWatermark (str) {
  let id = '1.23452384164.123412416'

  if (document.getElementById(id) !== null) {
    document.body.removeChild(document.getElementById(id))
  }

  // 创建一个画布
  let can = document.createElement('canvas')
  // 设置画布的长宽
  can.width = 500
  can.height = 400

  let cans = can.getContext('2d')
  // 旋转角度
  cans.rotate(-60 * Math.PI / 220)
  cans.font = '18px Vedana'
  // 设置填充绘画的颜色、渐变或者模式
  cans.fillStyle = 'rgba(130, 142, 162, 0.2)'
  // 设置文本内容的当前对齐方式
  cans.textAlign = 'left'
  // 设置在绘制文本时使用的当前文本基线
  cans.textBaseline = 'Middle'
  // 在画布上绘制填色的文本（输出的文本，开始绘制文本的X坐标位置，开始绘制文本的Y坐标位置）
  // cans.fillText(str, can.width / 8, can.height / 2)

  // 对文本进行换行
  // let initX = can.width / 8
  let initY = can.height
  // let lineHeight = 25
  // var lineWidth = 0
  // var canvasWidth = can.width
  // var lastSubStrIndex = 0
  cans.fillText(str, 0, initY)

  // let contentText = str.split('_')
  // contentText.forEach(item => {
  //   initY += lineHeight
  //   cans.fillText(item, can.width / 12, initY)
  // })

  // for (let i = 0; i < str.length; i++) {
  //   lineWidth += cans.measureText(str[i]).width
  //   if (lineWidth > canvasWidth - initX) { // 减去initX,防止边界出现的问题
  //     cans.fillText(str.substring(lastSubStrIndex, i), initX, initY)
  //     initY += lineHeight
  //     lineWidth = 0
  //     lastSubStrIndex = i
  //   }
  //   if (i === str.length - 1) {
  //     cans.fillText(str.substring(lastSubStrIndex, i + 1), initX, initY)
  //   }
  // }

  let div = document.createElement('div')
  div.id = id
  div.style.pointerEvents = 'none'
  div.style.top = '10px'
  div.style.left = '0px'
  div.style.position = 'fixed'
  div.style.zIndex = '100000'
  div.style.width = document.documentElement.clientWidth + 'px'
  div.style.height = document.documentElement.clientHeight + 'px'
  div.style.background = 'url(' + can.toDataURL('image/png') + ') repeat'
  document.body.appendChild(div)
  return id
}
function change (str) {
  let div = document.getElementById('1.23452384164.123412416')
  if (div === null) {
    set(str)
  } else {
    // 创建一个画布
    let can = document.createElement('canvas')
    // 设置画布的长宽
    can.width = 500
    can.height = 400

    let cans = can.getContext('2d')
    // 旋转角度
    cans.rotate(-60 * Math.PI / 220)
    cans.font = '18px Vedana'
    // 设置填充绘画的颜色、渐变或者模式
    cans.fillStyle = 'rgba(130, 142, 162, 0.30)'
    // 设置文本内容的当前对齐方式
    cans.textAlign = 'left'
    // 设置在绘制文本时使用的当前文本基线
    cans.textBaseline = 'Middle'

    let initY = can.height

    cans.fillText(str, 0, initY)

    div.style.background = 'url(' + can.toDataURL('image/png') + ') repeat'
  }
}
// 该方法只允许调用一次
function set (str) {
  let id = setWatermark(str)
  // setTimeout setInterval
  setTimeout(() => {
    if (document.getElementById(id) === null) {
      id = setWatermark(str)
    } else {
      id = setWatermark(str)
    }
  }, 500)
  window.onresize = () => {
    setWatermark(str)
  }
}

export default { set, change }
