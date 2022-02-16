'use strict'

var gCanvas
var gCtx

function initEditor(imgId) {
    gCanvas = document.querySelector('.editor-canvas')
    gCtx = gCanvas.getContext('2d')
    renderCanvas()
}

function renderCanvas() {
    const meme = getMeme()
    drawImgFromLocal(meme)
    setTimeout(() => drawText(meme), 0)
}

function drawImgFromLocal(meme) {
    var img = new Image()
    img.src = `images/meme-imgs (square)/${meme.selectedImgId}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
}

function drawText(meme) {
    var line = meme.lines[meme.selectedImgId]
    // var x = line.x
    var x = calcX(line)
    var y = line.y
    gCtx.lineWidth = 1
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = line.color
    gCtx.font = `${line.size}px "Impact`
    gCtx.fillText(line.txt, x, y)
    gCtx.strokeText(line.txt, x, y)
    if (x < 10) alert('The text is too long...')
}

function onTxt() {
    var el = document.querySelector('[name=txt-line]')
    var strTxt = el.value
    setTxt(strTxt)
    renderCanvas()
}

function onColorChoice() {
    var el = document.querySelector('[name=color]')
    var color = el.value
    setClr(color)
    renderCanvas()
}

function onFontSize(strOperator) {
    setFontSize(strOperator)
    renderCanvas()
}

function onMoveLine(strOperator) {
    console.log(strOperator);
    setLinePos(strOperator)
    renderCanvas()
}

function calcX(lineObj) {
    if (lineObj.align === 'C') {
        var x = lineObj.x - lineObj.txt.length / 2 * lineObj.size / 2
    } else if (lineObj.align === 'L') {
        x = 10
    } else {
        x = gCanvas.width - lineObj.txt.length * lineObj.size / 2
    }
    return x
}

function addLine(){
    creatLine()
    renderCanvas()
}