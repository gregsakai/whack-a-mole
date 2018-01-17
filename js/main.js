var button = document.getElementById("button");
var scoreDiv = document.getElementById("scoreDiv");
var score = 0;

// Styled this part in JavaScript to reference it within the function
button.style.width = "100px";
button.style.height = "50px";

var hWindowSize = window.innerWidth;
var vWindowSize = window.innerHeight;

function randomizer() {
  // Random value between 0 and the dimensions of the browser window
  var hRandom = Math.round(Math.random()*hWindowSize);
  var vRandom = Math.round(Math.random()*vWindowSize);

  console.log("Horizontal: "+hRandom);
  console.log("Vertical: "+vRandom);

  button.style.marginLeft = hRandom+"px";
  button.style.marginTop = vRandom+"px";

  // Maximum left offset with "mole" size taken into account
  var hMax = hWindowSize-parseInt(button.style.width);
  var vMax = vWindowSize-parseInt(button.style.height);

  // If the "mole" goes outside the bounds of the window, re-run the function
  if(hRandom > hMax || vRandom > vMax){
    console.log("Off the edge, reset");
    randomizer();
  }
}

// TIMED FUNCTION
setInterval(randomizer, 10000);

// SCOREKEEPING FUNCTIONALITY

button.addEventListener("click", function() {
  score++;
  console.log(score);
  scoreDiv.innerHTML = score;
});
