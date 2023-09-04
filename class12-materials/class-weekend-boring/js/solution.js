document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here
  if (day.toLowerCase() === "saturday" || day.toLowerCase() === "sunday") {
    document.querySelector("#placeToSee").innerHTML = "It\'s the weekend!";
  } else if (day.toLowerCase() === "monday" || day.toLowerCase() === "wednesday" || day.toLowerCase() === "friday") {
    document.querySelector("#placeToSee").innerHTML = "Boringgggg";
  } else if (day.toLowerCase() === "tuesday" || day.toLowerCase() === "thursday") {
    document.querySelector("#placeToSee").innerHTML = "Class day!";
  }

}