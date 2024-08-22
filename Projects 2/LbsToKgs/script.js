// The input that the user enters
let poundInput = document.getElementById('poundInput');
// Output
let kg = document.getElementById('KGS');
// error
const error = document.getElementById('error');
let formula = 0.45359237;


function Converter() {
    let poundInputValue = parseFloat(poundInput.value);
    if (poundInputValue <= 0 || isNaN(poundInputValue)) {
        error.textContent = 'Please enter a vaild number';
        error.style.color = 'red';
    }
    else{
        kg.innerHTML = (poundInputValue * formula).toFixed(2) + 'kg';
        error.textContent = '';
    }
}

poundInput.addEventListener('input', Converter)