//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class MakeEspressoMachine {
    constructor(brand, model, color, priceRange) {
        this.brand = brand
        this.model = model
        this.color = color
        this.price = priceRange
    }
    capuccino() {
        console.log('Making a capuccino')
    }

    brewCoffee() {
        console.log('Making a cup of coffee')
    }

    hotWater() {
        console.log('Be careful! Hot!')
    }
}

let keurigVersionOne = new MakeEspressoMachine('Keurig', 'Version 1', 'Silver', 'Mid-Range')