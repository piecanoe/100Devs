document.getElementById('check').onclick = showMe


function showMe() {
    let day = document.querySelector('#day').value.toLowerCase();

    if (day === 'tuesday' || day === 'thursday') {
        document.querySelector('#placeToSee').innerText = 'get up. class!!!'
    } else if (day === 'sunday' || day === 'saturday') {
        document.querySelector('#placeToSee').innerText = 'sleep in'
    } else {
        document.querySelector('#placeToSee').innerText = 'zzzz'
    }
}