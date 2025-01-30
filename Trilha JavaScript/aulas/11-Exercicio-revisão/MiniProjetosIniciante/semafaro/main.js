const img = document.getElementById('img');
const buttons = document.getElementById('buttons');


const trafficLight = (event) => {
   // turnOn.red() maneira diferente para poder chamar a minhafunção no obj
   turnOn[event.target.id]()
}

const turnOn = { // Objeto literal
    'red' : () => img.src = './img/vermelho.png',
    'yellow' : () => img.src = './img/amarelo.png',
    'green' : () => img.src = './img/verde.png',
    
}

buttons.addEventListener('click', trafficLight )