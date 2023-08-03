document.querySelector('#yell').addEventListener('click', shoutItLoud)


function shoutItLoud() {

    let fName = document.querySelector('#firstName').value
    let fMid = document.querySelector('#firstMiddle').value
    let midMid = document.querySelector('#middleMiddle').value
    let lMid = document.querySelector('#lastMiddle').value
    let lName = document.querySelector('#lastName').value

    document.querySelector('#placeToYell').innerText = `${fName} ${fMid} ${midMid} ${lMid} ${lName}`
}