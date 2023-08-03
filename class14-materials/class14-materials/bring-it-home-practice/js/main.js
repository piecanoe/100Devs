// *Variables*
// Create a variable and console log the value
let butt = 'crack';

console.log(butt);

// Create a variable, add 10 to it, and alert the value
let shit = 88;

shit += 10;
alert(shit);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function stinkHead(a, b, c, d) {
    let stinkHead = a - b - c -d;
    alert(stinkHead)
}

stinkHead(3, 6, 2, -6);

// Create a function that divides one number by another and returns the remainder
function mod(z,y) {
    let jump = z % y;
    return(jump)
}
mod(9,2);


// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function robWill(bird, dang) {
    let doubt = bird + dang;

    if(doubt > 50) {
        alert('Jumanji')
    } else {
        alert('Genie')
    }
}

robWill(4, 80);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function pasta(head, heart, ear) {
    let x = head * heart * ear;

    if(x % 3 === 0) {
        alert('ZEBRA')
    } else {
        alert('uhhhno')
    }
}

pasta(1, 2, 3);