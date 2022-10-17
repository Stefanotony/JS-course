const header = document.getElementById('header');
const color = document.getElementById('color');
const btn = document.querySelector('.btn');
const box = document.querySelector('.box');
const random = document.getElementById('rnd');
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const curr = document.getElementById('curr');


color.addEventListener('input', function(){

    const value = document.getElementById('color').value;

    box.style.backgroundColor = value;

    curr.textContent = value;

});

btn.addEventListener('click', function(){

    box.style.backgroundColor = 'transparent';

    if(box.style.backgroundColor = 'transparent'){

        curr.textContent = 'Transparent';

    }

});


random.addEventListener('click', function(){

    let hexColor = '#';

    for(let i = 0; i < 6; i++){

        hexColor += hex[getRandomNumber()];
        
    }

    box.style.backgroundColor = hexColor;

    curr.textContent = hexColor;


});

function getRandomNumber(){

    return Math.floor(Math.random() * hex.length);
}