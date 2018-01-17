var button = document.getElementById("button");

var hMax = window.innerWidth;
var vMax = window.innerHeight;

function randomizer() {
  var hRandom = Math.floor(Math.random() * (hMax + 1));
  var vRandom = Math.floor(Math.random() * (vMax + 1));
  button.style.marginLeft = hRandom - 100 + "px";
  button.style.marginTop = vRandom - 50 + "px";
}
// TIMED FUNCTION
setInterval(randomizer, 1000);

// SCOREKEEPING FUNCTIONALITY

var scoreDiv = document.getElementById("scoreDiv");
var score = 0;

button.addEventListener("click", function() {
  score++;
  console.log(score);
  scoreDiv.innerHTML = score;
});
