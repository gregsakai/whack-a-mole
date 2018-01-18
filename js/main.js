var mole = document.getElementById("mole");
var scoreDiv = document.getElementById("scoreDiv");
var score = 0;

// Styled this part in JavaScript to reference it within the function
mole.style.width = "100px";
mole.style.height = "70px";

var hWindowSize = window.innerWidth;
var vWindowSize = window.innerHeight;

function randomizer() {
  // Random value between 0 and the dimensions of the browser window
  var hRandom = Math.round(Math.random()*hWindowSize);
  var vRandom = Math.round(Math.random()*vWindowSize);

  console.log("Horizontal: "+hRandom);
  console.log("Vertical: "+vRandom);

  mole.style.marginLeft = hRandom+"px";
  mole.style.marginTop = vRandom+"px";

  // Maximum left offset with "mole" size taken into account
  var hMax = hWindowSize-parseInt(mole.style.width);
  var vMax = vWindowSize-parseInt(mole.style.height);

  // If the "mole" goes outside the bounds of the window, re-run the function
  if(hRandom > hMax || vRandom > vMax){
    console.log("Off the edge, reset");
    randomizer();
  }
}

// TIMED FUNCTION
setInterval(randomizer, 10000);

// SCOREKEEPING FUNCTIONALITY

mole.addEventListener("click", function() {
  score++;
  scoreDiv.innerHTML = score;
});
