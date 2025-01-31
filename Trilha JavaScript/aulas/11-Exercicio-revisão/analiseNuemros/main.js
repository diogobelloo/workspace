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

function inLista(n, l){ //validção para vê se o numero não está listado no array.
    if(l.indexOf(Number(n)) != -1){
        return true //foi encontrado
    }
     else{
        return false //Não tem repetido, nao foi encontrado !
    }
}


function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML =''
    }
    else{
        window.alert('Valor invalido ou já encontrado na lista.');
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0 ){
        window.alert("adicione valores antes de finalizar")
    }
    else{
        let tot = valores.length // pegando total de elementos dentro do meu array
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos] 
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<li>Ao todo, temos ${tot} cadastrados.</li>`
        res.innerHTML += `<li>O maior valor informado foi ${maior}</li>`
        res.innerHTML += `<li>A soma entre todos numeros é igual a : ${soma}</li>`
        res.innerHTML += `<li>A media dos valores digitados é igual a  : ${media}</li>`
        
    }
    
}