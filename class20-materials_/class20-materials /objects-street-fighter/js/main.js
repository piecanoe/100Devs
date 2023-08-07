//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods


function StreetFighter (name, gender, type, nationality){
    this.name = name
    this.gender = gender
    this.type = type
    this.nationality = nationality

    this.intro = function(name){
        console.log(`Hi! Call me ${this.name}`)
    }

    this.special = function(){
        console.log(`${this.name} just did their special move!`)
    }

    this.die = function(){
        console.log('You died.')
    }
}

let guile = new StreetFighter ('Guile', "M", "Fighting", "USA")
