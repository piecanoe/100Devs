// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = "grass jelly"
console.log(favDrink)


//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let str = "butt gun hippo red apple"

console.log(str.includes('apple'))


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rps() {
    let random = Math.random()
    if (random < .33) {
        return 'rock'
    } else if (random < .66) {
        return 'paper'
    } else {
        return 'scissors'
    }

}
console.log(rps())


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function playGame(playerChoice) {
    let botChoice = rps()
    if (playerChoice === 'rock' && botChoice === 'scissors' || playerChoice === 'paper' && botChoice === 'rock' || playerChoice === 'scissors' && botChoice === 'paper') {
        console.log('you win')
    } else if (playerChoice === botChoice) {
        console.log('draw')
    } else {
        console.log('you lose')
    }

}
playGame('rock')

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playGameXTimes(arr) {
    arr.forEach( choice => playGame(choice))
}
playGameXTimes(['rock', 'paper', 'scissors'])