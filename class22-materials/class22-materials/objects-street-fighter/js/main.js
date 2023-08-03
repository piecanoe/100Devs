//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetFighter(fighterType, fighterGender, fighterNationality, fighterAge) {
        this.type = fighterType
        this.gender = fighterGender
        this.nationality = fighterNationality
        this.age = fighterAge
        this.punch = function () {
            console.log('you got socked in the face')
        }
        this.kick = function() {
            console.log('you got kicked in the dick')
        }
        this.special = function() {
            console.log('you just got murdered by my special move!')
        }
}


let ken = new StreetFighter('normal', 'male', 'USA', '33')