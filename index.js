let cardEl = document.getElementById("card-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let messageEl = document.getElementById("message-el")
let playerEl = document.getElementById("player-el")

let player = {
    name: "ABC",
    chips: 100
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

playerEl.textContent = `${player.name} $: ${player.chips}`

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard, secondCard)
    sum = cards[0] + cards[1]
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += `${cards[i]} `
    }
    sumEl.textContent = `Sum: ${sum}`
    if (sum <= 20) {
        message = "Draw a new card?"
    } else if (sum === 21) {
        message = "BlackJack!"
        hasBlackJack = true
    } else {
        message = "You're out."
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
}


let person = {
    name: "abc",
    age: 12,
    contry: "Japan"
}

function logData() {
    return person.name + "is" + person.age + "years old and lives in" + person.contry
}

logData()