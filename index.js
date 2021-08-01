let player = {
    name: "Robin",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $ " + player.chips

function getRandomCard() {
    let n = Math.floor(Math.random() * 13) + 1
    if (n === 1) {
        return n = 11
    } else if (n === 11 || n === 12 || n === 13) {
        return n = 10
    }
    return n
}

function starter() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true

    renderGame()
}


function renderGame() {

    cardEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

    if (sum < 20 || sum === 20) {
        message = "Do you want to draw a new card?"

    }

    else if (sum === 21) {
        message = "You have got blackjack!!!"
        hasBlackJack = true
    }

    else {
        message = "You are out of the game."
        isAlive = false
    }

    sumEl.textContent = "SUM: " + sum
    messageEl.textContent = message
}

function newcard() {

    if (isAlive === true && hasBlackJack === false) {
        let ncard = getRandomCard()
        cards.push(ncard)
        sum = sum + ncard
        renderGame()
    }

}


let person = {
    name: "Robin",
    age: 26,
    country:"Bangladesh"
}

function logData(){
    let c = person.name + " is" + person.age + " years old and lives in " + person.country
    return c
}

console.log(logData())

let age = 64

if(age < 6){
    console.log("Free")
} else if (age == 6 || age <= 17){
    console.log("Child Discount")
} else if (age == 18 || age <= 26 ){
    console.log("Student Discount")
} else if (age == 27 || age <= 66 ){
    console.log("Full Price")
} else {
    console.log("Senior citizen discount")
}

let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]



// console.log("The 5 largest countries in teh world: ")
// for (let i = 0; i < largeCountries.length; i++){
//     console.log("- " + largeCountries[i])
// }

let hands = ["rock", "paper", "scissors"]

function getRandomhand(){
    let r = Math.floor(Math.random() * 3)
    return hands [r]
}

console.log(getRandomhand())