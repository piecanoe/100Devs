//Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

function camelize(str) {
    return str
    .split('-') // [a, b]
    .reduce((a, b) => a + b.charAt(0).toUpperCase() + b.slice(1));
}

console.log(camelize('camel-case'))

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.