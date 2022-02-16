'use strict'

function onInit(){
    renderImags()
}

function onNavLink(ev){
    var els = document.querySelectorAll('.main-nav-link')
    els.forEach(el => el.classList.remove('active'))
    ev.classList.toggle('active')
}

function renderImags(){
    const imgs = getImgsToDisplay()
    var strHTML = ''
    imgs.forEach(img => {
        strHTML += `<div class="img-card" onclick="selectImg(${img.id})">
        <img src="images/meme-imgs (square)/${img.id}.jpg"></div>`
    })
    document.querySelector('.imgs-gallery').innerHTML = strHTML
}

function selectImg(imgId){
    setMeme(imgId)
    document.querySelector('.gallery-container').style.display = 'none'
    document.querySelector('.editor-container').style.display = 'grid'
    initEditor(imgId)
}