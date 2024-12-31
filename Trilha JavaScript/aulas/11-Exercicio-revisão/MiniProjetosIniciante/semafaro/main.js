const img = document.getElementById('img');
const buttons = document.getElementById ('buttons');
let colorIndex = 0;
let intervalId = null

const trafficLight = (e) => {
    stopAutomatic();
    turnOn[e.target.id]();// evento captura o target e dentro do target o id.
}

const nextIndex = () => {

    colorIndex = colorIndex < 2 ? ++colorIndex : 0;
    //(o ++ está antes, pq se colocar ele pra adicionar depois com essa condição, irá sempre ficar no anterior, diferente do if else)


    // if(colorIndex < 2 ){
    //      colorIndex++
    //  }
    //  else {
    //    colorIndex = 0;
    //  }
}

const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex];
    turnOn[color]();// chamando turnOn com a color (green,yellow ou red)
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval(intervalId)    
}

// com o objeto é possivel armazenar funções e tornar mais dinamica a aplicação.
const turnOn = {
    //nome dos objetos precisa ser omesmo dos ids no HTML
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () =>  intervalId = setInterval(changeColor,1000)
} 

buttons.addEventListener('click', trafficLight );