//Write your pseduo code first! 


document.querySelector('#yell').addEventListener('click', convert)

function convert() {
    //need value in celsius
    let temp = document.querySelector('#celsius').value
    //convert from celsius to farenheit
    temp = temp * 1.8 + 32;
    //show new value
    document.querySelector('#placeToYell').innerText = temp
}