'use strict'

function getQuote() {
    let RandomNumber = Math.random() * quotes.length
    let RandomNumberFloor = Math.floor(RandomNumber)
    let quoteText = document.createElement("p")
    let quoteName = document.createElement("p")

    return {
        quote: quote,
        name: name
    }
}

function quoteLoader() {
    let quote = getQuote()

    quoteText.textContent = quote.quote
    quoteName.textContent = quote.name
}

let quotes = [
    {
        "quote": "Kanoners!",
        "name": "Bosse"
    },
    {
        "quote": "Snöre på snöre!",
        "name": " Knut"
    },
    {
        "quote": "Dunder honung!",
        "name": "Bamse"
    },
    {
        "quote": "quack, quack!",
        "name": "Kalle"
    },
    {
        "quote": "Attans!",
        "name": "Rasmus"
    },
    {
        "quote": "Tjena keks-helvete vill du knulla!",
        "name": "Nicke"
    },
    {
        "quote": "Beatsaber 500 squat challange",
        "name": "Jesper"
    },
]
/* Get elements for quotes */
let app = document.getElementById("citat")

/* Create elements */
//let RandomNumber = Math.random() * quotes.length
//let RandomNumberFloor = Math.floor(RandomNumber)

let quoteText = document.createElement("p")
let quoteName = document.createElement("p")

let quote = document.createElement("blockquote")
quote.setAttribute("class", "citatet")

/*
let quoteText = document.createElement("p")
let quoteName = document.createElement("p")
*/

/* Uppdatebutton */
let updateButton = document.createElement("button")
updateButton.textContent = ("Uppdatera")
updateButton.setAttribute("class", "uppdatera")

/*button function / EVENT Lyssnare */
updateButton.addEventListener("click", function () {
    quoteLoader()
})

/* Load on Doc.Load */
window.onload = quoteLoader()

/* Set Elements in elements */
quoteText.textContent = quotes[RandomNumberFloor].quote
quoteName.textContent = quotes[RandomNumberFloor].name

/* Append the element */
app.appendChild(updateButton)
app.appendChild(quote)
quote.appendChild(quoteText)
quote.appendChild(quoteName)