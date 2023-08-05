// *Variables*
// Create a variable and console log the value
let kendama = 3
console.log(kendama)

// // Create a variable, add 10 to it, and alert the value
let rubiksCube = 10
rubiksCube += 10
console.log(rubiksCube)

// // *Functions*
// // Create a function that subtracts 4 numbers and alerts the difference
function nintendo(n1, n2, n3 ,n4) {
    let difference = n1 - n2 - n3 - n4
    alert(difference)
}
nintendo(3, 5, 6, 10)

// Create a function that divides one number by another and returns the remainder
function sony(num1, num2){
    let remainder = num1 % num2
    return remainder
}
console.log(sony(6, 13))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function robin(a, b){
    if (a +b > 50){
        alert('Jumanji')
    }
}

robin(40, 12)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function miyagi(one, two, three){
    if ((one * two * three) % 3 === 0){
        alert('ZEBRA')
    }else{
        alert('zubruh')
    }
}
miyagi(5, 70, 22)


//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function circle(word, x){
    for (let i = 1; i <= x; i++){
        console.log(word)
    }
}
circle('Jason', 4)