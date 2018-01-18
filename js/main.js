var mole = document.getElementById("mole");
var scoreDiv = document.getElementById("scoreDiv");
var score = 0;

// Styled in JavaScript to easily reference within the function
mole.style.width = "100px";
mole.style.height = "70px";

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function randomizer() {
  // Random value between 0 and the dimensions of the browser window
  var hRandom = Math.round(Math.random() * windowWidth);
  var vRandom = Math.round(Math.random() * windowHeight);

  console.log("Horizontal: " + hRandom);
  console.log("Vertical: " + vRandom);

  // Maximum left offset with "mole" size taken into account
  var hMax = windowWidth - parseInt(mole.style.width);
  var vMax = windowHeight - parseInt(mole.style.height);

  mole.style.marginLeft = hRandom + "px";
  mole.style.marginTop = vRandom + "px";

  // If the "mole" goes outside the bounds of the window, re-run the function
  if (hRandom > hMax || vRandom > vMax) {
    console.log("Off the edge, reset");
    randomizer();
  }
}

// COUNTDOWN TIMER
// var minutes = 0;
// var seconds = 10;
// var timerDiv = document.getElementById("timerDiv");
//
// function countdown() {
//   seconds--;
//   if (seconds < 10) {
//     timerDiv.innerHTML = minutes + ":0" + seconds;
//   } else {
//     timerDiv.innerHTML = minutes + ":" + seconds;
//   }
//   if (seconds === 0) {
//     alert("you lose");
//     location.reload();
//   }
// }
// var timer = setInterval(countdown, 1000);

// TIMED FUNCTION
setInterval(randomizer, 700);

// SCOREKEEPING FUNCTIONALITY

mole.addEventListener("click", function() {
  score++;
  scoreDiv.innerHTML = "Your Score: " + score;
});
