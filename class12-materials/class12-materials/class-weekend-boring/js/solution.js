document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  if (day.toLowerCase() === 'saturday' || day.toLowerCase() === 'sunday') {
    document.querySelector('#placeToSee').innerHTML = 'It\'s the mfkn weekend!';
  } else if (day.toLowerCase() === 'tuesday' || day.toLowerCase() === 'thursday') {
    document.querySelector('#placeToSee').innerHTML = 'Class Day, Baybeee!';
  } else {
    document.querySelector('#placeToSee').innerHTML = 'Borrinnggg';
  }

}

