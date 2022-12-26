'use strict';

/* localStorage */

const form = document.querySelector('#form'),
      inputText = document.querySelector('#input-text'),
      msg = document.querySelector('.msg');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem('input-text', inputText.value); 
    location.reload();
});

if (localStorage.getItem('input-text') === 'x') {
    msg.classList.add('box-blue');
} else if (localStorage.getItem('input-text') === 'y') {
    msg.classList.add('box-yellow');
} else {
    msg.innerHTML = 'No such data!';
}

//console.log(localStorage.getItem('input-text') ?? "Данных нет в хранилище");
