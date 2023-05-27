document.querySelector('#purple').onclick = partyPurple
document.querySelector('#green').onclick = partyGreen
document.querySelector('#blue').onclick = partyBlue
document.querySelector('#yellow').onclick = partyYellow

function partyPurple() {
    document.querySelector('body').style.backgroundColor = 'purple'
    document.querySelector('body').style.color = 'white'
}

function partyGreen() {
    document.querySelector('body').style.backgroundColor = 'green'
    document.querySelector('body').style.color = 'white'
}
function partyBlue() {
    document.querySelector('body').style.backgroundColor = 'blue'
    document.querySelector('body').style.color = 'white'
}
function partyYellow() {
    document.querySelector('body').style.backgroundColor = 'yellow'
    document.querySelector('body').style.color = 'white'
}