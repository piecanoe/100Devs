// //---Easy
// //create a function that subtracts two numbers and alerts the difference
function difference(num1, num2){
    let difference = num1 - num2
    // alert(difference)
}


// // //create a function that divides three numbers and console logs the quotient
function quotient(a, b, c) {
    let quotient = a / b / c
    console.log(quotient)
}

// // //create a function that multiplys three numbers and returns the product
function product(n1, n2, n3){
    let product = n1 * n2 * n3
    return(product)
}


// //---Medium
// //create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function remainder(number1, number2, number3){
    let sumFirstTwo = number1 + number2
    return(sumFirstTwo % number3)
}

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function zebra(q, w, e, r){
    let product = q * w
    if (product > 100){
        console.log(e + r)
    }else if (product < 100){
        console.log(e - r)
    }else{
        alert((q * w * e) % r)
    }
}
