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
  mole.style.display = "block";
  randomizer();
}

submitName.addEventListener("click", submitForm);

// Styled in JavaScript to easily reference within the function
mole.style.width = "100px";
mole.style.height = "70px";

function randomizer(min, max) {
  hMin = 0;
  vMin = 100;
  hMax = parseInt(window.innerWidth) - parseInt(mole.style.width);
  vMax = parseInt(window.innerHeight) - parseInt(mole.style.height);

  var numLeft = Math.floor(Math.random() * (hMax - hMin) + hMin);
  var numTop = Math.floor(Math.random() * (vMax - vMin) + vMin);

  console.log("Left: " + numLeft);
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
var start = setInterval(randomizer, 10000);

// IMAGE CHANGER AFTER 0.3 SECONDS
function changeBack(){
  mole.src = "imgs/mole.jpg";
}
function changeImg(){
  mole.src = "imgs/mole2.jpg";
  setTimeout(changeBack, 300);
}

// SCOREKEEPING FUNCTIONALITY
mole.addEventListener("click", function() {
  score++;
  scoreDiv.innerHTML = score;
  changeImg();
});

// STOP BUTTON



// function pushToDB(){
//   //var data = nameForm.serializeArray();
//
//   $.post( $("#nameForm").attr("action"), $("#nameForm :input").serializeArray(), function(info){ $("#currentLeader").html(info);} );
//
// }

var stop = document.getElementById("stop");
stop.addEventListener("click", function() {
  console.log("stops the game");
  // stops the randomizer function
  clearInterval(start);
  // Use PHP to save user's name and score
  //pushToDB();

});

// PUSH TO DATABASE

// RESOURCE https://stackoverflow.com/questions/8412505/send-data-from-javascript-to-a-mysql-database
