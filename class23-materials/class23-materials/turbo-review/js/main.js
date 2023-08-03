// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sentence = 'i love fruit so much, right?'

alert(sentence.endsWith('?'))

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let originalString = 'suck banana jr. dev'

let newString = originalString.replaceAll('jr. dev', 'software engineer')
console.log(newString)


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rps() {
    let random = Math.random()
    if (random < .33) {
        return 'rock'
    } else if (random < .66) {
        return 'paper'
    } else if (random < 1) {
        return 'scissors'
    }
}
console.log(rps())

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
let botChoice = rps()

function checkWin(playerChoice) {
    if (playerChoice === 'rock' && botChoice === 'scissors' || playerChoice === 'paper' && botChoice === 'rock' || playerChoice === 'scissors' && botChoice === 'paper') {
        console.log('you win!')
    } else if (playerChoice === botChoice) {
        console.log('it\'s a tie')
    } else {
        console.log('you lose')
    }
}

checkWin('rock')


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
let arr = ['rock', 'paper', 'scissors']
function playGameXTimes(arr) {
    arr.forEach(choice => checkWin(choice))

}
playGameXTimes(arr)
