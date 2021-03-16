'use strict'

let nav = document.getElementById('nav')
let x = document.getElementById('x')

//console.log(nav, x)

x.addEventListener('click', function() {
    console.log("CLICKAD PÅ!!!");
    nav.classList.toggle('open')
})

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && nav.classList.contains('open')) { 
        nav.classList.toggle('open')
    }
})