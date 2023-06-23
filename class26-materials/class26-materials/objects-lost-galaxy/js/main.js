//Create a pizza object that has four properties and three methods

let pizza = {}

pizza.sauce = "white"
pizza.topping1 = "mushroom"
pizza.topping2 = "ham"
pizza.crust = "stuffed"

pizza.sound = function(sound) {
    console.log('Biting this pizza sounds like cronch.')
}

pizza.fav = function() {
    console.log('My favorite topping is ${pizza.topping1}.')
}

pizza.estimatedDeliveryTime = function() {
    console.log('Calculating...')
}

pizza.frisbee = function() {
    console.log('yeeeeeEEEt')
}


function Pizza2 (pizzaSauce, pizzaTopping1, pizzaTopping2, pizzaSize) {
    pizza.sauce = pizzaSauce
    pizza.topping1 = pizzaTopping1
    pizza.topping2 = pizzaTopping2
    pizza.size = pizzaSize
    pizza.here = function() {
        console.log('Pizza is here!')
    }
    pizza.burn = function() {
        console.log('Pizza was thrown across the room cuz it burned me')
    }
    pizza.gettingCold = function() {
        console.log('${pizzaTopping1} is turning into glue cuz its cold af')
    }
}

let elijahFav = new Pizza2 ('white', 'mushroom', 'ham', 'large')
