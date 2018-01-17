var button = document.getElementById("button");
button.style.width = "100px";
button.style.height = "50px";
button.style.backgroundColor = "brown";

var hMax = window.innerWidth;
var vMax = window.innerHeight;

function randomizer() {
  var hRandom = Math.floor(Math.random() * (hMax + 1));
  var vRandom = Math.floor(Math.random() * (vMax + 1));
  button.style.marginLeft = hRandom - 100 + "px";
  button.style.marginTop = vRandom - 50 + "px";
  var start = setTimeout(randomizer, 3000);
}

// SCOREKEEPING FUNCTIONALITY

var scoreDiv = document.getElementById("scoreDiv");
var score = 0;

button.addEventListener("click", function() {
  score++;
  console.log(score);
  scoreDiv.innerHTML = score;
});
