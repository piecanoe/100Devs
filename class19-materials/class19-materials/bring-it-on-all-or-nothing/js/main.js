// // *Variables*
// // Declare a variable, assign it a boolean, and alert the value
// let cheerleader = true;
// alert(cheerleader)

// // Declare a variable, reassign it to your favorite color, and console log the value
// let dunst = 'fun'
// dunst = 'green';
// console.log(dunst)

// // *Functions*
// // Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
// function japan(num1, num2, num3, num4) {
//     return((num1 + num2 + num3)/num4)
// }
// console.log(japan(1, 2, 3, 4))

// // Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
// function geffen(a, b) {
//     console.log(Math.pow(a, b))
// }
// console.log(geffen(3, 4))


// // *Conditionals*
// // Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
// function buttFace(x, y) {
//     if (x) {
//         alert(y)
//     } else {
//         console.log(y)
//     }
// }

// buttFace(true, 'yourMom')

// Can also do:
// const buttFace = (x, y) => b ? alert(y) : console.log(y)


//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

function fizzBuzz(number) {
    for (let i = 1; 1 <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz')
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else if (i % 5 === 0) {
            console.log('buzz')
        } else {
            console.log(i)
        }
    }
}