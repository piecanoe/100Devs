//Arrays

//Create and array of tv shows. Loop through and print each show to the console

let tvShows = ['It\'s Always Sunny', 'One Tree Hill', 'Terrace House']

tvShows.forEach(show => console.log(show))


//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let nums = [2, 4, 9, 27, 8]

let onlyEvens = arr => arr.filter(n => n % 2 === 0)

console.log(onlyEvens(nums))

//Create a function that takes in an array of numbers

//Alert the sum of the second lowest and the second highest number
function sumSecondLowHigh(arr) {
    let sorted = arr.sort((a,b) => a-b)
    alert(sorted[1] + sorted[sorted.length - 2])
}

sumSecondLowHigh([2, 6, 3, 74, 4])