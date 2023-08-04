//Write your pseudo code first!
//c to f
document.querySelector('button').addEventListener('click', cToF)

function cToF() {
    //need the value in c
    let temp = Number(document.querySelector('input').value)
    //convert
    temp = (temp * 1.8) + 32
    //call f
    console.log(temp)
    //put it into html
    document.querySelector('h2').innerText = temp
}
