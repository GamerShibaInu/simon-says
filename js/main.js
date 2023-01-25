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

    // Next level function
    function nextLevel() {
        // Add a random color to the botColor array
        let randomColor = colorDivs[Math.floor(Math.random() * colorDivs.length)].classList[1];
        botColor.push(randomColor);
        // Highlight the bot's color sequence
        for (let i = 0; i < botColor.length; i++) {
        setTimeout(function () {
        document.querySelector("." + botColor[i]).style.backgroundColor = "light" + botColor[i];
        setTimeout(function () {
        document.querySelector("." + botColor[i]).style.backgroundColor = botColor[i];
        }, 500);
        }, i * 1000);
        }
        }
        
        // Game start
        nextLevel();