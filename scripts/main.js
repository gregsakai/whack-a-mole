var mole = document.getElementById("mole");
var scoreDiv = document.getElementById("scoreDiv");
var score = 0;

// NAME SUBMISSION
var nameForm = document.getElementById("nameForm");
var yourName = document.getElementById("yourName");
var submitName = document.getElementById("submitName");
var currentLeader = document.getElementById("currentLeader");

function submitForm() {
  nameForm.style.display = "none";
  currentLeader.innerHTML = yourName.value;
  randomizer();
}

submitName.addEventListener("click", submitForm);

// Styled in JavaScript to easily reference within the function
mole.style.width = "100px";
mole.style.height = "70px";

function randomizer(min, max) {
  min = 0;
  hMax = parseInt(window.innerWidth);
  vMax = parseInt(window.innerHeight);

  var numLeft = Math.floor(Math.random()*(hMax-min)+min);
  var numTop = Math.floor(Math.random()*(vMax-min)+min);

  console.log("Left: "+numLeft);
  console.log("Top: "+numTop);
  // Random value between 0 and the dimensions of the browser window
  // var hRandom = Math.round(Math.random() * windowWidth);
  // var vRandom = Math.round(Math.random() * windowHeight);
  //
  // console.log("Horizontal: " + hRandom);
  // console.log("Vertical: " + vRandom);
  //
  // // Maximum left offset with "mole" size taken into account
  // var hMax = windowWidth - parseInt(mole.style.width);
  // var vMax = windowHeight - parseInt(mole.style.height);
  //
  // mole.style.marginLeft = hRandom + "px";
  // mole.style.marginTop = vRandom + "px";
  //
  // // If the "mole" goes outside the bounds of the window, re-run the function
  // if (hRandom > hMax || vRandom > vMax) {
  //   console.log("Off the edge, reset");
  //   randomizer();
  // }
}

// TIMED FUNCTION
setInterval(randomizer, 100000);

// SCOREKEEPING FUNCTIONALITY
mole.addEventListener("click", function() {
  score++;
  scoreDiv.innerHTML = score;
});

// STOP BUTTON
var stop = document.getElementById("stop");
stop.addEventListener("click", function() {
  console.log("stops the game");
  // Use PHP to save user's name and score
});

// PUSH TO DATABASE

// RESOURCE https://stackoverflow.com/questions/8412505/send-data-from-javascript-to-a-mysql-database
