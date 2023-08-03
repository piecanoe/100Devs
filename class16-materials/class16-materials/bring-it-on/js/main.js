// *Variables*
// Create a variable and console log the value
let zebra = 13
console.log(zebra)

// Create a variable, add 10 to it, and alert the value
let apple = 2
apple += 8

alert(apple)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function butt(num1, num2, num3, num4) {
    alert(num1 - num2 - num3 - num4)
}
butt(6, 2, 3, 63)

// Create a function that divides one number by another and returns the remainder
function glasses(sun, moon) {
    return sun % moon
}
console.log(glasses(5, 2))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function umbrella(Ey1, Ey2) {
    if (Ey1 + Ey2 > 50) {
        alert('Jumanji')
    } else {
        alert('Nomanji')
    }
}
umbrella(5, 23)


// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function brink(jordy, gabby, peter) {
    let pupNSuds = jordy * gabby * peter
    if (pupNSuds % 3 === 0) {
        alert('ZEBRA')
    }
}
brink(3, 3, 1)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function johnnyTsunami(word, num) {
    for (let i = 1; i <= num; i++){
        console.log(word)
    }
}
johnnyTsunami('wonderful', 21)