//Create a conditonal that checks their age
// document.querySelector('h1').addEventListener('click', check)

//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too

// function check(age) {
//     if (age < 16) {
//         console.log('you cant drive!!')
//     }else if (age < 18){
//         console.log('you cant get in the club!')
//     }else if (age < 21){
//         console.log('you cant drink')
//     }else if (age < 25){
//         console.log('you cant rent cas affordably')
//     }else if (age < 30){
//         console.log('you cant rent fancy cars affordably')
//     }else{
//         console.log('you have nothing to look forward to')
//     }
// }



//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

document.querySelector('h1').addEventListener('click', checkAge)
const p = document.querySelector('p')

function checkAge(){
    let age = Number(document.querySelector('input').value)
    if (age < 16) {
        p.innerText = 'you cant drive!!'
    }else if (age < 18){
        p.innerText = 'you cant get in the club!'
    }else if (age < 21){
        p.innerText = 'you cant drink'
    }else if (age < 25){
        p.innerText = 'you cant rent cas affordably'
    }else if (age < 30){
        p.innerText = 'you cant rent fancy cars affordably'
    }else{
        p.innerText = 'you have nothing to look forward to'
    }
}
