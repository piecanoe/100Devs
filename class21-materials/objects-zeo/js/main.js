//Create a stopwatch object that has four properties and three methods

let stopwatch = {}

stopwatch.color = 'green'
stopwatch.shape = 'triangle'
stopwatch.size = 'small'
stopwatch.type = 'digital'

stopwatch.start = function() {
    console.log( `Start`)
}

stopwatch.stop = function() {
    console.log( `Stop`)
}

stopwatch.sayColor = function(color) {
    console.log( `the color is ${color}`)
}
