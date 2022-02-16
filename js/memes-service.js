'use strict'

var gImgs = [
    { id: 1, keywords: ['polity', 'angry', 'trump'] },
    { id: 2, keywords: ['dogs', 'love', 'secret', 'Animals'] },
    { id: 3, keywords: ['dogs', 'baby'] },
    { id: 4, keywords: ['Animals', 'cat'] },
    { id: 5, keywords: ['funny',] },
    { id: 6, keywords: ['funny',] },
    { id: 7, keywords: ['funny',] },
    { id: 8, keywords: ['funny',] },
    { id: 9, keywords: ['funny',] },
    { id: 10, keywords: ['funny',] },
    { id: 11, keywords: ['funny',] },
    { id: 12, keywords: ['funny',] },
    { id: 13, keywords: ['funny',] },
    { id: 14, keywords: ['funny',] },
    { id: 15, keywords: ['funny',] },
    { id: 16, keywords: ['funny',] },
    { id: 17, keywords: ['funny',] },
    { id: 18, keywords: ['funny',] },
]

var gMeme = {
    selectedImgId: null,
    selectedLineIdx: null,
    lines: [{ txt: '', size: 50, align: 'C', color: 'white', x: 250, y: 100 }]
    // lines: []
}
function getImgsToDisplay() {
    return gImgs
}

function setMeme(imgId) {
    gMeme.selectedImgId = imgId
}

function getMeme() {
    return gMeme
}

function getImgsById(imgId) {
    const img = gImgs.find(img => img.id === imgId)
    return img
}

function setTxt(strTxt) {
    gMeme.lines[0].txt = strTxt
}

function setClr(color) {
    gMeme.lines[0].color = color
}

function setFontSize(strOperator) {
    gMeme.lines[0].size += (strOperator === '+') ? (+10) : (-10)
}

function setLinePos(strOperator) {
    if (strOperator==='+') gMeme.lines[0].y -= 1
    else if (strOperator==='-')  gMeme.lines[0].y += 1
    else  gMeme.lines[0].align = strOperator
}

function creatLine(){
    var line = { txt: '', size: 50, align: 'c', color: 'white', x: gCanvas.width/2, y: 100 }
    if (gMeme.lines.length===1){
        line.y = gCanvas.height-100
    } else if (gMeme.lines.length>1){
        line.y = gCanvas.height/2
    }
    gMeme.lines.push(line)
    gMeme.selectedLineIdx = gMeme.lines.length-1
}