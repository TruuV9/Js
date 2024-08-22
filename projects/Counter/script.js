const increase = document.getElementById('increase');
const reset = document.getElementById('reset');
const decrease = document.getElementById('decrease');
let header = document.getElementById('header');
let count = 0

increase.addEventListener("click", function(){
    count++;
    header.textContent = count
    updateColor()
})

reset.addEventListener("click", function(){
    count = 0;
    header.textContent = zero1;
    updateColor()
})

decrease.addEventListener("click", function(){
    count--;
    header.textContent = count
    updateColor()
})


function updateColor() {
    if (count === 0) {
        header.style.color = 'black';
    } else if (count > 0) {
        header.style.color = 'green';
    } else {
        header.style.color = 'red';
    }
}


