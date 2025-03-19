const num = document.querySelector('#valueInp');
const lista = document.querySelector('#select');
const res = document.querySelector('#resList');
const btnAdd = document.querySelector('#btnAdd');
const btnList = document.querySelector('#btnList');
let valores = []

function valueInp (n) {
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }
    else{
        return false
    }
}

function val(l,n) {
    if(l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
}


function adicionar(){
    if(valueInp(num.value)&& !val(valores,num.value)){
        valores.push(Number(num.value))
        let txt = document.createElement('option')
        txt.text = `Valor adicionado foi ${num.value}`
        lista.appendChild(txt)
        num.value = ''
        num.focus()
    }
    else {
        alert('Número invalido ou já inserido.');
    }
    res.innerHTML =''
}

function finalizar() {
    if(valores.length == 0){
        alert('adicione valores antes de finalizar')
    }
    else{
    let tot = valores.length

        let maior = valores[0]
        let menor = valores[0]
        let media = 0
        let soma = 0

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} numeros cadastrados</p>`
        res.innerHTML += `<p>o maior valor informado é ${maior}</p>`
        res.innerHTML += `<p>o menor valor informado é ${menor}</p>`
        res.innerHTML += `<p>A soma entre todos valores é igual a  ${soma}</p>`
        res.innerHTML += `<p>A média entre todos valores é igual a  ${media}</p>`
} }

btnList.addEventListener("click", finalizar)