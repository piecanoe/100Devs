// Variables
//You are getting ready to face Brock for the Boulder Badge. You want three pokemon on your team that each have evolved at least once. You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7, and weedle which is at level 1 and evolves at level 7.

// Create three variables to store the number of rare candies each of your pokemon would need to evolve (rare candies increase your level by one). 
// Finally, create a fourth variable named totalCandies that sums all the rare candies you would need. 

let bulbasaurCandy = 11
let caterpieCandy = 6
let weedleCandy = 6

let totalCandies = bulbasaurCandy + caterpieCandy + weedleCandy
console.log(totalCandies)

//Conditionals And Functions
//You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees celcius. Create one function that converts a Fahrenheit value to Celcius and another fuction that tells you wheither or not charmander can battle
function charmanderBattle (fahrenheit) {
    let celsius = (fahrenheit - 32) / 1.8

    if (celsius > 0) {
        console.log('battle')
    }else {
        console.log('no battle')
    }
}

charmanderBattle(50);



//Loops
//You have joined an undeground pokemon leauge. In this league, trainers can use any number of pokemon. Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party
function numOfPokemon(x) {
    for (let i = 1; i <= x; i++) {
        console.log("Pikachu I choose you")
    }    
}

numOfPokemon(5)

