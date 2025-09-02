/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
let choice = ['rock', 'paper', 'scissor']
let score = 0

let playerscore = document.getElementById('player-score')
let hands = document.getElementById('hands')
let result = document.getElementById('result')

function getComputerChoice(arr) {
    let index = Math.floor(Math.random() * arr.length)
    return arr[index]

}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0

function getResult(playerChoice, computerChoice) {
    // return the result of score based on if you won, drew, or lost
    // All situations where human draws, set `score` to 0
    if (playerChoice == computerChoice) {
        score = 0
    }
    // All situations where human wins, set `score` to 1
    // make sure to use else ifs here
    else if (playerChoice == 'paper' && computerChoice == 'rock') {
        score = 1
    }
    else if (playerChoice == 'scissor' && computerChoice == 'paper') {
        score = 1
    }
    else if (playerChoice == 'rock' && computerChoice == 'scissor') {
        score = 1
    }

    // Otherwise human loses (aka set score to -1)

    else {
        score = -1
    }


    // return score
    return score
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
    // Hint: on a score of -1
    // You should do result.innerText = 'You Lose!'
    // Don't forget to grab the div with the 'result' id!
    if (score == 1) {
        playerscore.innerText = `${score}`
        hands.innerText = `😎 ${playerChoice} VS 🦾 ${computerChoice}`
        result.innerText = 'You Win!'
    } else if (score == -1) {
        playerscore.innerText = `${score}`
        hands.innerText = `😎 ${playerChoice}  VS 🦾 ${computerChoice}`
        result.innerText = 'You Lose!'
    } else {
        playerscore.innerText = `${score}`
        hands.innerText = `😎 ${playerChoice} VS 🦾${computerChoice}`
        result.innerText = 'Draw!'

    }
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
    // get computer choice
    const computerChoice = getComputerChoice(choice)

    // calculate the result
    const score = getResult(playerChoice, computerChoice)

    // show the result in the DOM
    showResult(score, playerChoice, computerChoice)
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
    // use querySelector to select all RPS Buttons
    let playbutton = document.querySelectorAll('.rpsButton')
    // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

    // 1. loop through the buttons using a forEach loop
    // 2. Add a 'click' event listener to each button
    // 3. Call the onClickRPS function every time someone clicks
    // 4. Make sure to pass the currently selected rps button as an argument

    playbutton.forEach(playbutton => {
        playbutton.onclick = () => {
            onClickRPS(playbutton.value)
        }
    })


    // Add a click listener to the end game button that runs the endGame() function on click
    endGame()
}

// ** endGame function clears all the text on the DOM **
function endGame() {
    let end = document.getElementById('endGameButton')
    end.onclick = () => {
          playerscore.innerText =''
        hands.innerText = ''
        result.innerText = ''
    }
}

playGame()

