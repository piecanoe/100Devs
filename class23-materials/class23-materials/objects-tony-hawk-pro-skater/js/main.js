//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function MakeCharacter( chName, chStance, chGender, chSpecialTrick) {
    this.name = chName
    this.stance = chStance
    this.gender = chGender
    this.specialTrick = chSpecialTrick
    this.win = function() {
        console.log('you got the high score!')
    }
    this.bonusPoints = function() {
        console.log(`that was a sick ${chspecialTrick}`)
    }
    this.bail = function() {
        console.log('fuck that!')
    }
}

let tonyHawk = new MakeCharacter ('Tony Hawk', 'goofy', 'male', 'kickflip mctwist')

let leoBaker = new MakeCharacter ('Leo Baker', 'regular', 'non-binary', 'one-footed 5-0 grind')