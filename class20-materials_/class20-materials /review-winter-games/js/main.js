//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array 


function can(arr){
    let onlyEvens = []
    arr.forEach (num => {
        if (num % 2 === 0){
            onlyEvens.push(num)
        }
    })
    return onlyEvens
}


console.log(can([3, 5, 16, 66, 36]))




// Bonus: use map or filter)

