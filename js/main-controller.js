'use strict'

function onInit() {
    renderImags()
    renderKeywords()
    renderOptions()
}

function onNavLink(ev) {
    var els = document.querySelectorAll('.main-nav-link')
    els.forEach(el => el.classList.remove('active'))
    ev.classList.toggle('active')
    document.body.classList.remove('editor-open')
    // document.querySelector('.editor-container').style.display = 'none'
    // document.querySelector('.gallery-container').style.display = 'grid'
    document.body.classList.remove('nav-open')
}

function renderImags() {
    const imgs = getImgsToDisplay()
    var strHTML = ''
    imgs.forEach(img => {
        strHTML += `<div class="img-card" onclick="selectImg(${img.id})">
        <img src="images/meme-imgs (square)/${img.id}.jpg"></div>`
    })
    document.querySelector('.imgs-gallery').innerHTML = strHTML
}

function selectImg(imgId) {
    setMeme(imgId)
    document.body.classList.toggle('editor-open')
    // document.querySelector('.gallery-container').style.display = 'none'
    // document.querySelector('.editor-container').style.display = 'grid'
    var els = document.querySelectorAll('.main-nav-link')
    els.forEach(el => el.classList.remove('active'))
    initEditor()
}

function renderOptions() {
    var keywords = getKeywordsList()
    var strHTML = ''
    keywords.forEach(word => {
        strHTML += `<option value="${word}">${word}</option>`
    })
    document.querySelector('datalist').innerHTML = strHTML


}

function renderKeywords() {
    var keywords = getKeywordsList()
    var strHTML = ''
    keywords.forEach(word => {
        strHTML += `<span class="keyword" onclick="onKeyword(this)">${word}</span>`
    })
    document.querySelector('.keywords').innerHTML = strHTML
}

function onSearch() {
    var el = document.getElementById('filter-imgs')
    var keyword = el.value
    setFilterImgs(keyword)
    renderImags()
}

function onKeyword(el) {
    setFilterImgs(el.innerText)
    renderImags()
}

function onNavToggle(){
    document.body.classList.toggle('nav-open')
}