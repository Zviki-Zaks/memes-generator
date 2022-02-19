'use strict'

function saveToStorage(val) {
    localStorage.setItem('memesDB', JSON.stringify(val))
}

function loadFromStorage() {
    var val = localStorage.getItem('memesDB')
    return JSON.parse(val)
}