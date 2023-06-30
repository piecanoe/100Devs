//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods


class NetflixShow {
    constructor (showGenre, showRuntime, showStar, showRating) {
        this.genre = showGenre
        this.runtime = showRuntime
        this.star = showStar
        this.rating = showRating
    }
    play(){
        console.log(`You\'re watching ${showName}`)
    }
    replay(){
        console.log('Watch again?')
    }
    stillWatching(){
        console.log('Are you still watching?')
    }
}

let buttBuster = new NetflixShow ('horror', '30 minutes', 'Lizzy Caplan', '4 Stars')