const colors = ["blue", "red", "rgb(48, 41, 92)", "black"]; //array declaration
const body = document.querySelector('body');
const textColor = document.getElementById('colorText');
const btn = document.getElementById('btn');

btn.addEventListener("click", function() {
    const randomNumber = getRandomNumber()
    body.style.backgroundColor = colors [randomNumber];  
    textColor.textContent = colors [randomNumber];
    console.log(randomNumber);
})


function getRandomNumber() {
    return Math.floor(Math.random() *colors.length)
}
