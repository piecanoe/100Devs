document.querySelector('#purple').addEventListener('click', partyPurple)
document.querySelector('#green').addEventListener('click', partyGreen)
document.querySelector('#blue').addEventListener('click', partyBlue)
document.querySelector('#yellow').addEventListener('click', partyYellow)

function partyPurple() {
    document.querySelector('body').style.backgroundColor = 'purple'
    document.querySelector('body').style.color = 'white'
}
function partyGreen() {
    document.querySelector('body').style.backgroundColor = 'green'
    document.querySelector('body').style.color = 'orange'
}
function partyBlue() {
    document.querySelector('body').style.backgroundColor = 'blue'
    document.querySelector('body').style.color = 'red'
}
function partyYellow() {
    document.querySelector('body').style.backgroundColor = 'yellow'
    document.querySelector('body').style.color = 'grey'
}