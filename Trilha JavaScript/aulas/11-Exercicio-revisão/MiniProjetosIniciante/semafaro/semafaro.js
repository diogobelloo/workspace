const img = document.getElementById('img')
const buttons = document.getElementById('buttons');
let indexColor = 0;
let intervalId = null

const trafficLight = (e) => {
    stopAutomatic();  
    turnOn[e.target.id]();
}
const nextIndex = () => {
    indexColor = indexColor < 2 ? ++indexColor : 0
}

const changeColor = () => {
    const colors = ['red','yellow','green']
    const color = colors[indexColor]
    turnOn[color]()
    nextIndex()
}

const stopAutomatic = () => {
   clearInterval(intervalId)
}

const turnOn = {
    'green': () => img.src='./img/verde.png',
    'red': () => img.src='./img/vermelho.png',
    'yellow': () => img.src='./img/amarelo.png',
    'automatic': () => intervalId = setInterval(changeColor,1000) 

}

buttons.addEventListener('click', trafficLight)