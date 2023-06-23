//Create a constructor with 4 properties and 3 methods

function PizzaMachine (sauce, crust, size, topping){
    this.sauce = sauce
    this.crust = crust
    this.size = size
    this.topping = topping
    this.burn = function() {
        console.log('owwww!!hot!')
    }
    this.tasty = function() {
        console.log('delicious!!')
    }
    this.elijah = function() {
        console.log('${this.topping} is Elijah\'s favorite!')
    }
}

let elijahsFav = new PizzaMachine('white', 'thin', 'large', 'mushroom')