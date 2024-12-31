const turnOnOff = document.querySelector('#turnOnOff');
const lamp = document.querySelector('#lamp')

function isBroken(){
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn(){
    if(!isBroken()){ //se nao tiver a palavra quebrada 
        lamp.src = './img/ligada.jpg' //liga ela
    }
}

function lampOff(){
    if(!isBroken()){
        lamp.src = './img/desligada.jpg'
    }
}

function lampBroken() {
    lamp.src = './img/quebrada.jpg'
}

function lampOnOff () {
    if(turnOnOff.textContent == 'Ligar'){
        lampOn()
        turnOnOff.textContent ='Desligar'
    }
    else{
        lampOff()
        turnOnOff.textContent = 'Ligar'
    }
    
}




turnOnOff.addEventListener("click", lampOnOff);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseout", lampOff);
lamp.addEventListener("dblclick", lampBroken);
