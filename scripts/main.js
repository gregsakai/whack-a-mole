var mole = document.getElementById("mole");
var scoreDiv = document.getElementById("scoreDiv");
var audio = document.getElementById("audio");
var score = 0;

var stopped = false;

// NAME SUBMISSION
var nameForm = document.getElementById("nameForm");
var yourName = document.getElementById("yourName");
var submitName = document.getElementById("submitName");
var currentLeader = document.getElementById("currentLeader");

var sessionName;

function submitForm() {
  nameForm.style.display = "none";
  currentLeader.innerHTML = yourName.value;
  mole.style.display = "block";
  sessionName = yourName.value;
  randomizer();
  getLeaderboard();
}

submitName.addEventListener("click", submitForm);

// Styled in JavaScript to easily reference within the function
mole.style.width = "100px";
mole.style.height = "70px";

function randomizer(min, max) {
  hMin = 0;
  vMin = 100;
  hMax = parseInt(window.innerWidth) - parseInt(mole.style.width);
  vMax = parseInt(window.innerHeight) - parseInt(mole.style.height) - 70;

  var numLeft = Math.floor(Math.random() * (hMax - hMin) + hMin);
  var numTop = Math.abs(Math.floor(Math.random() * (vMax - vMin) + vMin));

  console.log("Top: " + numTop);

  mole.style.marginLeft = numLeft + "px";
  mole.style.marginTop = numTop + "px";

  // If the mole goes outside the bounds of the window, re-run the function
  if (numLeft > hMax || numTop > vMax) {
    console.log("Off the edge, reset");
    randomizer();
  }
}

// TIMED FUNCTION
var start = setInterval(randomizer, 1000);

// IMAGE CHANGER AFTER 0.3 SECONDS
function changeBack() {
  mole.src = "imgs/mole.jpg";
}

function changeImg() {
  mole.src = "imgs/mole2.jpg";
  audio.play();
  // Audio file cuts out after 0.5 seconds,
  // because no sound is present in the file after 500ms
  setTimeout(function() {
    audio.load();
  }, 500);
  setTimeout(changeBack, 300);
}

// SCOREKEEPING FUNCTIONALITY
mole.addEventListener("click", function() {
  if (stopped === false) {
    score++;
    scoreDiv.innerHTML = score;
  }
  changeImg();
});

// PUSH TO DATABASE

// Leaderboard displays current leader as soon as page is loaded
function getLeaderboard() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      currentLeader.innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", "http://localhost/whack-a-mole/select.php", true);
  xhr.send();
}
getLeaderboard();

// Pushes the current user's name and score to the database
function pushToDB() {
  var xhr = new XMLHttpRequest();
  var request = "http://localhost/whack-a-mole/save.php?uName=" + sessionName + ": " + "&uScore=" + score;
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      getLeaderboard();
    }
  };
  xhr.open("GET", request, true);
  xhr.send();
}

// STOP BUTTON

var stop = document.getElementById("stop");
stop.addEventListener("click", function() {
  console.log("STOPS GAME");
  stopped = true;
  scoreDiv.innerHTML = "Final score: " + score;
  // stops the randomizer function
  clearInterval(start);
  // Use PHP to save user's name and score
  pushToDB();
});

// RESOURCE https://stackoverflow.com/questions/8412505/send-data-from-javascript-to-a-mysql-database
