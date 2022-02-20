'use strict'

const gMemesSentences = [
    'I never eat falafel',
    'DOMS DOMS EVERYWHERE',
    'Stop Using i in for loops',
    'Armed in knowledge',
    'Js error "Unexpected String"',
    'One does not simply write js',
    'May the force be with you',
    'I know JS',
    'But if we could',
    'JS what is this?',
  ];
var gImgs = [
    { id: 1, keywords: ['all', 'politics', 'angry', 'trump'] },
    { id: 2, keywords: ['all', 'dogs', 'love', 'secret', 'animal'] },
    { id: 3, keywords: ['all', 'dogs', 'baby'] },
    { id: 4, keywords: ['all', 'animal', 'cat'] },
    { id: 5, keywords: ['all', 'funny',] },
    { id: 6, keywords: ['all', 'funny',] },
    { id: 7, keywords: ['all', 'funny',] },
    { id: 8, keywords: ['all', 'funny',] },
    { id: 9, keywords: ['all', 'funny',] },
    { id: 10, keywords: ['all', 'funny',] },
    { id: 11, keywords: ['all', 'funny',] },
    { id: 12, keywords: ['all', 'funny',] },
    { id: 13, keywords: ['all', 'funny',] },
    { id: 14, keywords: ['all', 'funny',] },
    { id: 15, keywords: ['all', 'funny',] },
    { id: 16, keywords: ['all', 'funny',] },
    { id: 17, keywords: ['all', 'funny',] },
    { id: 18, keywords: ['all', 'funny',] },
]
var gFilterBy = 'all'

var gMeme;
var gMemes = []


function creatMeme(imgId){
    gMeme = {
        selectedImgId: imgId,
        selectedLineIdx: 0,
        lines: []
    }
    creatLine()
}

function getKeywordsList() {
    var keywords = ''
    gImgs.forEach(img => {
        img.keywords.map(word => { if (!keywords.includes(word)) keywords += word + ' ' })
    })
    return keywords.trim().split(' ')
}

function getImgsToDisplay() {
    const imgs = gImgs.filter(img => img.keywords.includes(gFilterBy))
    return imgs
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

function setClr(color, str) {
    if (str==='fill') gMeme.lines[gMeme.selectedLineIdx].fillClr = color
    else gMeme.lines[gMeme.selectedLineIdx].strokeClr = color
}

function setFontSize(strOperator) {
    gMeme.lines[gMeme.selectedLineIdx].size += (strOperator === '+') ? (+5) : (-5)
}

function setLinePos(strOperator) {
    if (strOperator === '+') gMeme.lines[gMeme.selectedLineIdx].y -= 1
    else if (strOperator === '-') gMeme.lines[gMeme.selectedLineIdx].y += 1
    else gMeme.lines[gMeme.selectedLineIdx].align = strOperator
}

function creatLine() {
    var line = { txt: '', size: 30, align: 'C', fillClr: '#ffffff',strokeClr: '#000000' , x: gCanvas.width / 2, y: 50 }
    if (!gMeme.lines||!gMeme.lines.length) line.y = 50
    else if (gMeme.lines.length === 1) {
        line.y = gCanvas.height - 50
    } else if (gMeme.lines.length > 1) {
        line.y = gCanvas.height / 2
    }
    gMeme.lines.push(line)
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function deleteLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    if (!gMeme.lines.length) {
        creatLine()
        gMeme.selectedLineIdx = 0
    }else gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function replaceLine() {
    if (gMeme.selectedLineIdx < gMeme.lines.length - 1) {
        gMeme.selectedLineIdx += 1
    } else gMeme.selectedLineIdx = 0
}

function setFilterImgs(keyword) {
    if (!keyword) keyword = 'all'
    gFilterBy = keyword
}

function saveMeme(imgUrl){
    gMemes.unshift(imgUrl)
    saveToStorage(gMemes)
}

function creatRandomMeme() {
    creatMeme(getRandomIntInclusive(1, 18))
    setTxt(gMemesSentences[getRandomIntInclusive(0, 9)])
    setClr(getRandomColor(), 'fill')
    setClr(getRandomColor(), 'stroke')
    gMeme.lines[gMeme.selectedLineIdx].size = getRandomIntInclusive(30, 80)
}