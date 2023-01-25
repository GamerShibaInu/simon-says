//variables
let score = 0
let level = 0;
//array's
let botColor = [];
let plrColor = [];

// Add event listeners to color divs
const colorDivs = document.querySelectorAll(".color");
colorDivs.forEach(function (colorDiv) {
    colorDiv.addEventListener("click", function() {
        let color = colorDiv.classList[1];
playerInputColor(color);
});
});

// Player input color function
function playerInputColor(color) {
    plrColor.push(color);
    checkPlayerInput();
    }
    
// Compare the botColor and plrColor arrays
function checkPlayerInput() {
    for (let i = 0; i < botColor.length; i++) {
        if (botColor[i] !== plrColor[i]) {
            if(plrColor.length == botColor.length) {
                console.log("Incorrect input, game over!");
                location.reload(); 
                return;
            }
            else {
                return;
            }
        }
    }
    if (plrColor.length === botColor.length) {
        score++;
        level++;
        console.log("Correct input, score: " + score + ", level: " + level);
        plrColor = [];
        document.querySelector(".score").innerHTML = "score: " + score;
        setTimeout(nextLevel, 1000);
    }
}

