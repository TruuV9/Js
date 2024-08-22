let input = document.getElementById('dark-mode');
let body = document.getElementById('body');

input.addEventListener('click', function(){
    if (body.style.backgroundColor === 'white') {

        body.style.backgroundColor = 'black';
    } else {
        body.style.backgroundColor = 'white';
    }
});

// body.style.backgroundColor = 'black';
