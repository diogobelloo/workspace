
const turnOn = document.querySelector('#turnOn');
const turnOff = document.querySelector('#turnOff');
const lamp = document.querySelector('#lamp');

turnOn.addEventListener("click", lampOnOff)
turnOff.addEventListener("click", lampOff)
lamp.addEventListener("mouseover", lampOn)
lamp.addEventListener("mouseleave", lampOff)
lamp.addEventListener("dblclick", lampbroken)

function isLampbroken(){
    return lamp.src.indexOf('quebrada') > 1
}

function lampOn() {
    if(!isLampbroken()){
    lamp.src = "./img/ligada.jpg"
}}
function lampOff() {
    if(!isLampbroken()){
    lamp.src = "./img/desligada.jpg"
}}

function lampbroken(){
    lamp.src = "./img/quebrada.jpg"
}

function lampOnOff() { 
        if(turnOn.textContent == 'ligar'){
           lampOn()
           turnOn.textContent ='desligar'
        }
        else{
            lampOff()
            turnOn.textContent = 'ligar'
        }
}




