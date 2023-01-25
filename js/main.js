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
red.addEventListener("click", function() {
  playerInputColor("red");
});
yellow.addEventListener("click", function() {
  playerInputColor("yellow");
});
green.addEventListener("click", function() {
  playerInputColor("green");
});
blue.addEventListener("click", function() {
  playerInputColor("blue");
});

