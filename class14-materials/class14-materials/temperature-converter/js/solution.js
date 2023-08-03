//Write your pseduo code first! 

document.querySelector('#yell').addEventListener('click', convert)

function convert() {
    console.log('yeet');
    //get temperature in celsius
    let temp = document.querySelector('#firstName').value
    //convert temperature to farenheit
    temp = temp * 9/5 + 32
    //return new temperature
    document.querySelector('#placeToYell').innerText = temp
}
