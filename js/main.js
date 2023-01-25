//variables
let score = 0
let level = 0;
//array's
let botColor = [];
let plrColor = [];

// gets color divs
const red = document.getElementsByClassName("red");
const yellow = document.getElementsByClassName("yellow");
const green = document.getElementsByClassName("green");
const blue = document.getElementsByClassName("blue");

// adds event listeners to color divs
red.addEventListener("click", function () {
    playerInputColor("red");
});
yellow.addEventListener("click", function () {
    playerInputColor("yellow");
});
green.addEventListener("click", function () {
    playerInputColor("green");
});
blue.addEventListener("click", function () {
    playerInputColor("blue");
});

// player input color function
function playerInputColor(color) {
    plrColor.push(color);
    checkPlayerInput();
}

// random color generator for array
function generateBotColor() {
    const colors = ["red", "green", "blue", "yellow"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    botColor.push(randomColor);
  }


  // next level
  function nextLevel() {
    generateBotColor();
    for (let i = 0; i < botColor.length; i++) {
      document.getElementsByClassName(botColor[i]).style.backgroundColor = "white";
      setTimeout(function() {
        document.getElementsByClassName(botColor[i]).style.backgroundColor = botColor[i];
      }, 1000);
    }
  }
