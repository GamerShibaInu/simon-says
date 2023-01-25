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

