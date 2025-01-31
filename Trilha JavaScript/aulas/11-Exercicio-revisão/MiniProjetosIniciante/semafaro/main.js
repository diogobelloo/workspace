const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;


const trafficLight = (event) => {//pegara o evento clicado 
   // turnOn.red() maneira diferente para poder chamar a minhafunção no obj
   stopAutomatmic()
   turnOn[event.target.id]() //irá captar o id meu botão clicado e colocar dentro dos cochetes
}

const nextIndex = () => {
  //colorIndex = colorIndex < 2 ? ++colorIndex : 0;     ternário, é utilizado quando a condição é pequena
    if(colorIndex < 2){
        colorIndex++
    }
    else{
        colorIndex = 0
    }
   
}

const changecolor = () => {
    nextIndex()
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex]
    turnOn[color]()
}

const stopAutomatmic = () => {
    clearInterval(intervalId)
}

const turnOn = { // Objeto literal
    'red' : () => img.src = './img/vermelho.png', // objeto é composto por propiedade e valor. red : () => {}
    'yellow' : () => img.src = './img/amarelo.png',
    'green' : () => img.src = './img/verde.png',
    'automatic': () => intervalId = setInterval(changecolor, 1000) // Ira executar essa determinada fuçnão a cada 1000 segundos. 
}

buttons.addEventListener('click', trafficLight )