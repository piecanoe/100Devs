//Create an array of movie titles. Loop through the array and each element to the h2.
let movieTitles = ['brink', 'jt', 'luck of irish']

for (let i = 0; i < movieTitles.length; i++) {
    document.querySelector('h2').innerText += ' ' + movieTitles[i]
}
//Create an array of numbers. Loop through the array and add three to each number and replace the old number.
let newArr = [10, 20, 30]

newArr.forEach((item, i) => {
    newArr[i] = item + 3
})
//Find the average of all the numbers from question three
let sum = 0

for (let i = 0; i < newArr.length; i++) {
    sum = sum + newArr[i]
}

console.log(sum / newArr.length)