'use strict'

function initMemes() {
    var memes = loadFromStorage()
    var strHTML = ``
    if (!memes) {
        strHTML = `<h1 class="no-memes">Create Your Memes</h1>`
    } else strHTML = `<h1 class="no-memes">Website under construction ...</h1>`

    // memes.forEach((meme, idx) => {
    //     strHTML += `<div class="memes-canvas-container${idx}">
    //     <canvas id="memes-canvas${idx}" width="200" height="200"></canvas>
    //     </div>`
    // });
    document.querySelector('.memes-container').innerHTML = strHTML
    // renderMeme()  
}

