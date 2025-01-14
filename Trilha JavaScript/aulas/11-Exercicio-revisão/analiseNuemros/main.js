//const NumberValue = document.getElementById('valueInp'); 
const num = document.querySelector('#valueInp');
const lista = document.querySelector('#select');
const res = document.querySelector('#resList');
const btnAdd = document.querySelector('#btnAdd');
const btnList = document.querySelector('#btnList');
let valores = []



function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }
        else {
            return false
    }
}

function inLista(n, l){ //validção para vê se o numero não está em lista.
    if(l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
}


function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
    }
    else{
        window.alert('Valor invalido ou já encontrado na lista.');
    }
}