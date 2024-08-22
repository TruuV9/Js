const numbers = document.querySelector('.btns');
const result = document.getElementById('resultOne');

function Number(value) {
    result.textContent += value; 
}
function Clear() {
    result.textContent = '';
}
function GetResult() {
    result.textContent = 'idk';
}