//Variables
const generateBtn = document.getElementById("generate-btn");
const bod = document.getElementById("body-1");

function randomGenerator() {
    const rand = Math.floor(Math.random() * 256);

    return rand;
}

//Event Listener 

generateBtn.addEventListener("click", function () {
    let color1 = randomGenerator();
    let color2 = randomGenerator();
    let color3 = randomGenerator();
    bod.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
});