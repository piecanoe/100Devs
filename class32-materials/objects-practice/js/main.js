// // Come up with with a parent class
// // Extend that parent class into two children
// // Use Encapsulation, Abstraction, Inheritance, and Polymorphism 


class Contractor {
    constructor(name, role) {
        this._name = name
        this._role = role
    }
    get name()  {
        return this._name
    }
    get role() {
        return this._role
    }
    speak(){
        console.log(`Hi! I\'m ${this._name}, a ${this._role} at 100Devs`)
    }
}

class Front extends Contractor {
    constructor(name, role, tech) {
        super(name, role)
        this._tech = tech
    }
    get tech() {
        return this._tech
    }
    speak() {
        console.log(`Hi! I\'m ${this._name}, a ${this._role} at 100Devs and I use ${this._tech}`)
    }
}

class Back extends Contractor {
    constructor(name, role, tech){
        super(name, role)
        this._tech = tech
    }
    get tech() {
        return this._tech
    }
    speak() {
        console.log(`Hi! I\'m ${this._name}, a ${this._role} at 100Devs and I use ${this._tech}`)
    }
}

let karen = new Front ('Karen', 'front-end dev', 'Javascript')
let simba = new Back ('Simba', 'back-end dev', 'Node.js')


let agencyList = [karen, simba]

for(person of agencyList){
    person.speak()
}

















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
