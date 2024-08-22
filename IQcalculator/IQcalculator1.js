// a program that provide your IQ based on a 10 quesitons test

const input = document.getElementById('IQinput');
const btn = document.getElementById('btn');
let result = document.getElementById('iqResult');


btn.addEventListener('click', function IQ(testScore){
    let testScore = input.value;

    const maxIQ = 130;
    const minIQ = 70;
    const averageIQ = 100;
    
    const IQ = ((testScore / maxIQ) * (maxIQ - minIQ) + minIQ);
    result.value = IQ;
});
