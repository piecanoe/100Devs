//Create a stopwatch object that has four properties and three methods

let skateboard = {}

skateboard.size = '8.0'
skateboard.color = 'green stripe'
skateboard.style = 'double nose'
skateboard.material = 'wood'

skateboard.pop = function(){
    console.log('You popped the board super high!')
}

skateboard.measure = function(size){
    console.log(`My board is a ${size}`)
}

skateboard.slip = function(){
    console.log('it\'s getting away!!!')
}