'use strict'

var gImgs = [
    { id: 1, keywords: ['all','polity', 'angry', 'trump'] },
    { id: 2, keywords: ['all','dogs', 'love', 'secret', 'animal'] },
    { id: 3, keywords: ['all','dogs', 'baby'] },
    { id: 4, keywords: ['all','animal', 'cat'] },
    { id: 5, keywords: ['all','funny',] },
    { id: 6, keywords: ['all','funny',] },
    { id: 7, keywords: ['all','funny',] },
    { id: 8, keywords: ['all','funny',] },
    { id: 9, keywords: ['all','funny',] },
    { id: 10, keywords: ['all','funny',] },
    { id: 11, keywords: ['all','funny',] },
    { id: 12, keywords: ['all','funny',] },
    { id: 13, keywords: ['all','funny',] },
    { id: 14, keywords: ['all','funny',] },
    { id: 15, keywords: ['all','funny',] },
    { id: 16, keywords: ['all','funny',] },
    { id: 17, keywords: ['all','funny',] },
    { id: 18, keywords: ['all','funny',] },
]
var gFilterBy = 'all'
var gMeme = {
    selectedImgId: null,
    selectedLineIdx: 0,
    lines: [{ txt: '', size: 50, align: 'C', color: '#ffffff', x: 250, y: 100 }]
    // lines: []
}

function getKeywordsList (){
    var keywords = ''
    gImgs.forEach(img => {
        img.keywords.map(word => { if (!keywords.includes(word)) keywords += word + ' '})
    })
   return keywords.trim().split(' ')
}

function getImgsToDisplay() {
    const imgs = gImgs.filter(img=> img.keywords.includes(gFilterBy))
    return imgs
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
    gMeme.lines[gMeme.selectedLineIdx].txt = strTxt
}

function setClr(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function setFontSize(strOperator) {
    gMeme.lines[gMeme.selectedLineIdx].size += (strOperator === '+') ? (+10) : (-10)
}

function setLinePos(strOperator) {
    if (strOperator==='+') gMeme.lines[gMeme.selectedLineIdx].y -= 1
    else if (strOperator==='-')  gMeme.lines[gMeme.selectedLineIdx].y += 1
    else  gMeme.lines[gMeme.selectedLineIdx].align = strOperator
}

function creatLine(){
    var line = { txt: '', size: 50, align: 'C', color: '#ffffff', x: gCanvas.width/2, y: 100 }
    if (gMeme.lines.length===1){
        line.y = gCanvas.height-100
    } else if (gMeme.lines.length>1){
        line.y = gCanvas.height/2
    }
    gMeme.lines.push(line)
    gMeme.selectedLineIdx = gMeme.lines.length-1
}

function deleteLine(){
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    if (!gMeme.lines.length) creatLine()
    else gMeme.selectedLineIdx = gMeme.lines.length-1
}

function replaceLine() {
    if (gMeme.selectedLineIdx<gMeme.lines.length-1){
        gMeme.selectedLineIdx += 1
    } else gMeme.selectedLineIdx = 0
}

function setFilterImgs(keyword){
    gFilterBy = keyword
}