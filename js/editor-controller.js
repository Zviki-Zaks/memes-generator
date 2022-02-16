'use strict'

var gCanvas
var gCtx

function initEditor(imgId) {
    gCanvas = document.querySelector('.editor-canvas')
    gCtx = gCanvas.getContext('2d')
    renderCanvas()
}

function renderCanvas(){
    const meme = getMeme()
    drawImgFromLocal(meme)
    // drawText(meme)
   
}

function drawImgFromLocal(meme) {
    var img = new Image()
    img.src = `images/meme-imgs (square)/${meme.selectedImgId}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
}

function drawText(meme) {
    var x = 250
    var y = 100
    var line = meme.lines[0]
    gCtx.lineWidth = 1
    gCtx.strokeStyle = 'white'
    gCtx.fillStyle = line.color
    gCtx.font = `${line.size}px Arial`
    gCtx.fillText(line.txt, x, y)
    gCtx.strokeText(line.txt, x, y)
    console.log(line.txt);
}

function onTxt(ev) {
    var el = document.querySelector('[name=txt-line]')
    var strTxt = el.value
    setTxt(strTxt)
    const meme = getMeme()
    console.log(ev);
    // renderCanvas()
    if (ev.key==='Backspace'){
        renderCanvas()     
    }
    drawText(meme)
}

