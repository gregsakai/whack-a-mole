var button = document.getElementById("button");
var buttonWidth = button.style.width;
buttonWidth = "100px";

var hMax = window.innerWidth;
var vMax = window.innerHeight;

function randomizer() {
  var hRandom = Math.round(Math.random()*hMax);
  var vRandom = Math.round(Math.random()*vMax);
  console.log("Horizontal: "+hRandom);
  console.log("Vertical: "+vRandom);
  button.style.marginLeft = hRandom+"px";
  button.style.marginTop = vRandom+"px";

  var lol;
  if(hRandom < hMax){
    console.log("test");
  }
}

// TIMED FUNCTION
setInterval(randomizer, 50000);

// SCOREKEEPING FUNCTIONALITY

var scoreDiv = document.getElementById("scoreDiv");
var score = 0;

button.addEventListener("click", function() {
  score++;
  console.log(score);
  scoreDiv.innerHTML = score;
});
