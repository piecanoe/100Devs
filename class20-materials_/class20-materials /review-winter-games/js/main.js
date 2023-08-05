//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array 

// function onlyEvensFinder(arr){
//     let onlyEvens = []
//     arr.forEach (num => {
//         if (num % 2 === 0){
//             onlyEvens.push(num)
//          }
//     })
//     return onlyEvens
// }

// console.log(onlyEvensFinder([1, 2, 33, 44, 52, 4])) 

// Bonus: use map or filter)

function onlyEvensFinder(arr){
    return arr.filter( num => num % 2 === 0)
}

console.log(onlyEvensFinder([1, 2, 33, 44, 52, 4])) 