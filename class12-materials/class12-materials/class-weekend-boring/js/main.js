document.querySelector('#check').addEventListener('click', tellMe)


function tellMe() {

    let day = document.querySelector('#day').value.toLowerCase()

    if(day === 'saturday' || day === 'sunday') {
        document.querySelector('#placeToSee').innerHTML = 'Dog and Frog kisskisskiss'
    } else if (day === 'tuesday' || day === 'thursday') {
        document.querySelector('#placeToSee').innerHTML = 'Learn time!!'
    } else {
        document.querySelector('#placeToSee').innerHTML = 'too straight for me'
    }
}