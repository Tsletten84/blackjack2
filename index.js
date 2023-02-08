let player = {
    name: "Trond",
    chips: 50
}

let cards = []
let sum = 0
let isAlive = false
let blackjack = false
let message= ""
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEL = document.getElementById("player-el")

playerEL.textContent = player.name + ": $" + player.chips


function getRandomcard(){
    
    let randomCard = Math.floor(Math.random()*13) +1
    if (randomCard > 10) {
        return 10
    } else if (randomCard === 1){
        return 11
    } else {
        return randomCard
    }
    
}


function startGame (){
    isAlive = true
    blackjack = false
    cards = []
    let firstCard = getRandomcard();
    let secondCard = getRandomcard();
    cards.push(firstCard)
    cards.push(secondCard)
    sum = firstCard + secondCard
    cardsEl.textContent = "Cards :"
    renderGame()

}

function renderGame() {

    cardsEl.textContent = "Cards: "
    for (let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }

    if (sum <= 20) {
        isAlive = true
        
        message ="new card?"
    }
    else if (sum === 21) {
        message ="Blackjack"
        blackjack = true
    } 
    else {
        message ="bust"
        isAlive = false
        
    }
    messageEl.textContent = message;

    sumEl.textContent ="Sum: " + sum;
}



function newCard() {
    
   
    if (isAlive === true && blackjack === false ) {
        let card = getRandomcard();
        sum += card
        cards.push(card)
        renderGame()

}

}
