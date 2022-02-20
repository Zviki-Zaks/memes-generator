'use strict'


var gCanvas = document.getElementById('editor-canvas')
var gCtx = gCanvas.getContext('2d')

function initEditor() {
    resizeCanvas()
    renderMeme()
    window.addEventListener('resize', resizeCanvas)
}

function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container')
    gCanvas.width = elContainer.offsetWidth - 36
    gCanvas.height = gCanvas.width
    setTimeout(() => renderMeme(),100)
 }

function renderMeme() {
    const meme = getMeme()
    drawImgFromLocal(meme)
    setTimeout(() => drawText(meme), 0)
    var elTxt = document.querySelector('[name=txt-line]')
    elTxt.value = gMeme.lines[gMeme.selectedLineIdx].txt
}

function drawImgFromLocal(meme) {
    var img = new Image()
    img.src = `images/meme-imgs (square)/${meme.selectedImgId}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
}

function drawText(meme) {
    meme.lines.forEach((line ,idx)=> {
        gCtx.font = `${line.size}px "Impact"`
        if (idx=== meme.selectedLineIdx){
            calcX(line)
        }
        gCtx.lineWidth = 2
        gCtx.strokeStyle = line.strokeClr
        gCtx.fillStyle = line.fillClr
        gCtx.fillText(line.txt, line.x,  line.y)
        gCtx.strokeText(line.txt, line.x,  line.y)
    });
}

function onTxt() {
    var el = document.querySelector('[name=txt-line]')
    var strTxt = el.value
    setTxt(strTxt)
    renderMeme()
}

function onColorChoice(str) {
    var el = document.querySelector('[name=fill-color]')
    var color = el.value
    setClr(color, str)
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

function calcX(line) {
    // console.log('line', line);
    var txtWidth = gCtx.measureText(line.txt).width
    // console.log('width', txtWidth);
    var prevX = line.x
    if (line.align === 'C') {
       line.x = gCanvas.width/2 - txtWidth / 2
    } else if (line.align === 'L') {
        line.x = 10
    } else {
        line.x = gCanvas.width - (txtWidth+10)
    }
    if (line.x < 10 || (txtWidth+20)>=gCanvas.width) {
        line.x = prevX
        alert('The text is too long...')
    }
    return line.x
}

function addLine(){
    creatLine()
    renderMeme()
}

function onDeleteLine(){
    deleteLine()
    renderMeme()
}

function onReplaceLine() {
    replaceLine()
    renderMeme()
}

function onSaveMeme() {
    const data = gCanvas.toDataURL()
    saveMeme(data)
    document.body.classList.add('memes-open')
    initMemes()
}

function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'my-meme.jpg'
}

