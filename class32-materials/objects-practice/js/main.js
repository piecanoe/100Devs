// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 


class Skater{
    constructor(name){
        this._name = name
    }
}

class StreetSkater extends Skater {
    constructor(name, terrain){
        super(name)
        this._terrain = terrain
    }
    speak(){
        console.log(`Hi there! I am a ${this._terrain} skater.`)
    }
}


class Goofy extends StreetSkater {
    constructor(name, terrain, stance){
        super(name, terrain)
        this._stance = stance
    }
    speak(){
        console.log(`Hi there! My name is ${this._name} and I am a ${this._stance}-footed ${this._terrain} skater`)
    }
}


class Regular extends StreetSkater {
    constructor(name, terrain, stance){
        super(name, terrain)
        this._stance = stance
    }
    speak(){
        console.log(`Hi there! My name is ${this._name} and I am a ${this._stance}-footed ${this._terrain} skater`)
    }
}


let elissa = new StreetSkater ('Elissa', 'street')
let leo = new Goofy ('Leo', 'street', 'goofy')
let tom = new Regular ('Tom', 'street', 'regular')














































// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }
