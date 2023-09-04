document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', addThree)
document.querySelector('#zebra').addEventListener('click', addNine)
document.querySelector('#cantThinkOfAnything').addEventListener('click', minTwo)
document.querySelector('#ukulele').addEventListener('click', timesTwo)

let total = 0;
function makeZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}
function addThree() {
  total += 3;
  document.querySelector('#placeToPutResult').innerText = total
}
function addNine() {
  total += 9
  document.querySelector('#placeToPutResult').innerText = total
}
function minTwo() {
  total -= 2
  document.querySelector('#placeToPutResult').innerText = total
}
function timesTwo() {
  total = total * 2
  document.querySelector('#placeToPutResult').innerText = total
}