'use strict'

var gCanvas
var gCtx

function initEditor() {
    gCanvas = document.getElementById('editor-canvas')
    gCtx = gCanvas.getContext('2d')
    resizeCanvas()
    renderMeme()
    window.addEventListener('resize', resizeCanvas)
}

function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container')
    gCanvas.width = elContainer.offsetWidth - 36
    gCanvas.height = gCanvas.width
    // renderMeme()
    setTimeout(() => renderMeme(),100)
 }

function renderMeme() {
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
    meme.lines.forEach(line => {
        var x = calcX(line)
        var y = line.y
        gCtx.lineWidth = 1
        gCtx.strokeStyle = 'black'
        gCtx.fillStyle = line.color
        gCtx.font = `${line.size}px "Impact`
        gCtx.fillText(line.txt, x, y)
        gCtx.strokeText(line.txt, x, y)
    });
}

function onTxt() {
    var el = document.querySelector('[name=txt-line]')
    var strTxt = el.value
    setTxt(strTxt)
    renderMeme()
}

function onColorChoice() {
    var el = document.querySelector('[name=color]')
    var color = el.value
    setClr(color)
    renderMeme()
}

function onFontSize(strOperator) {
    setFontSize(strOperator)
    renderMeme()
}

function onMoveLine(strOperator) {
    setLinePos(strOperator)
    renderMeme()
}

function calcX(lineObj) {
    var txtWidth = gCtx.measureText(lineObj.txt).width
    lineObj.x = gCanvas.width/2
    if (lineObj.align === 'C') {
        var x = lineObj.x - txtWidth / 2
        // var x = gCanvas.width/2 - txtWidth / 2
    } else if (lineObj.align === 'L') {
        x = 10
    } else {
        x = gCanvas.width - (txtWidth+10)
    }
    if (x < 10 || (txtWidth+20)>=gCanvas.width) alert('The text is too long...')
    console.log(x);
    return x
}

function addLine(){
    creatLine()
    renderMeme()
    var elTxt = document.querySelector('[name=txt-line]')
    var elClr = document.querySelector('[name=color]')
    elTxt.value = gMeme.lines[gMeme.selectedLineIdx].txt
    elClr.value = gMeme.lines[gMeme.selectedLineIdx].color
}

function onDeleteLine(){
    deleteLine()
    renderMeme()
    var elTxt = document.querySelector('[name=txt-line]')
    var elClr = document.querySelector('[name=color]')
    elTxt.value = gMeme.lines[gMeme.selectedLineIdx].txt
    elClr.value = gMeme.lines[gMeme.selectedLineIdx].color
}

function onReplaceLine() {
    replaceLine()
    renderMeme()
    var elTxt = document.querySelector('[name=txt-line]')
    var elClr = document.querySelector('[name=color]')
    elTxt.value = gMeme.lines[gMeme.selectedLineIdx].txt
    elClr.value = gMeme.lines[gMeme.selectedLineIdx].color
}