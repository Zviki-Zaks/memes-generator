'use strict'

function initMemes() {
    var memes = loadFromStorage()
    var strHTML = ``
    if (!memes) {
        strHTML = `<h1 class="no-memes">Create Your Memes</h1>`
    }
    memes.forEach((meme, idx) => {
        strHTML += `<div class="meme-card">
                        <img src="${meme}">
                        <button class="share-btn btn" onclick="onShareMeme()">
                            <a class="share-link${idx}" href="#">
                                Share on Facebook</a>
                        </button>

                    </div>`
    });
    document.querySelector('.memes-container').innerHTML = strHTML
    memes.forEach((meme, idx) => uploadImg(meme, idx))
}



function uploadImg(dataURL, idx) {

    function onSuccess(uploadedImgUrl) {
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)

        document.querySelector(`.share-link${idx}`).href =
            `https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" 
            title="Share on Facebook" target="_blank"
            onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}');
            return false;`
    }

    doUploadImg(dataURL, onSuccess);
}

function doUploadImg(imgDataUrl, onSuccess) {

    const formData = new FormData();
    formData.append('img', imgDataUrl)

    fetch('//ca-upload.com/here/upload.php', {
        method: 'POST',
        body: formData
    })
        .then(res => res.text())
        .then((url) => {
            onSuccess(url)
        })
        .catch((err) => {
            console.error(err)
        })
}
