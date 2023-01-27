//variables
let score = 0;
let level = 0;
let highScorePoints = 0;
//array's
let botColor = [];
let plrColor = [];
//load highscore
const vHighScore = localStorage.getItem("highScore");
const highScoreText = document.querySelector(".high-score")
highScoreText.textContent = "high score: " + vHighScore
// add event listeners to color divs
const colorDivs = document.querySelectorAll(".color");
colorDivs.forEach(function (colorDiv) {
    colorDiv.addEventListener("click", function () {
        let color = colorDiv.classList[1];
        playerInputColor(color);
    });
});

// player input color function
function playerInputColor(color) {
    plrColor.push(color);
    checkPlayerInput();
}

// compare the botColor and plrColor arrays
function checkPlayerInput() {
    for (let i = 0; i < botColor.length; i++) {
        if (botColor[i] !== plrColor[i]) {
            if (plrColor.length == botColor.length) {
                highScorePoints = 0 + score
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
    if (score >= highScorePoints) {
        highScorePoints = 0 + score
        localStorage.setItem("highScore", score);
    }
}   
// next level function
function nextLevel() {
    // add a random color to the botColor array
    let randomColor = colorDivs[Math.floor(Math.random() * colorDivs.length)].classList[1];
    botColor.push(randomColor);
    // highlight the bot's color sequence
    for (let i = 0; i < botColor.length; i++) {
        setTimeout(function () {
            document.querySelector("." + botColor[i]).classList.add("dark");
            setTimeout(function () {
                document.querySelector("." + botColor[i]).classList.remove("dark");
            }, 500);
        }, i * 1000);
    }
}

// Game start
nextLevel();