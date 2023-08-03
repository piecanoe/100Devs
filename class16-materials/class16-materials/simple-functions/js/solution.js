//---Easy
//create a function that subtracts two numbers and alerts the difference
function difference(a, b) {
    alert(a - b)
}
difference(30, 5)

//create a function that divides three numbers and console logs the quotient
function quotient(c, d, e) {
    console.log(c / d / e)
}
quotient(50, 34, 6)

//create a function that multiplys three numbers and returns the product
function product(f, g, h) {
    return f * g * h
}
product(3, 62, 34)

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function oof(num1, num2, num3) {
    let sumOfNum1AndNum2 = num1 + num2
    return sumOfNum1AndNum2 % num3
}
console.log(oof(3, 3, 2))

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function buster(num1, num2, num3, num4) {
    let zebra = num1 * num2
    if (zebra > 100) {
        console.log(zebra + (num3 + num4));
    } else if (zebra < 100) {
        console.log(zebra - (num3 - num4));
    } else {
        alert((zebra * num3) % num4)
    }
}
buster(2, 900, 50, 94)