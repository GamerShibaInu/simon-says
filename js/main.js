//variables
let score = 0
let level = 0;
//array's
let botColor = [];
let plrColor = [];

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

// next level function
function nextLevel() {
    // add a random color to the botColor array
    let randomColor = colorDivs[Math.floor(Math.random() * colorDivs.length)].classList[1];
    botColor.push(randomColor);
    // highlight the bot's color sequence
    for (let i = 0; i < botColor.length; i++) {
        setTimeout(function () {
            document.querySelector("." + botColor[i]).style.backgroundColor = "dark" + botColor[i];
            setTimeout(function () {
                document.querySelector("." + botColor[i]).style.backgroundColor = botColor[i];
            }, 500);
        }, i * 1000);
    }
}

// Game start
nextLevel();