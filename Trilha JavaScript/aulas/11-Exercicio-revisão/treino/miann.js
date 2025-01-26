const num = document.querySelector('#valueInp')
const submit = document.getElementById('btnAdd');
const res = document.querySelector('#select')
const finList = document.querySelector('#resList')
let list = []


// 01 - criar validação input menor que 100 ou igual a 100

// 02 - conferir se o numero adicionado ja está na lista

// 03 - adicionar o valor ao clicar

//04 mostrar o total de numeros na minha lista

//05 - Mostrar o menor numero da minha lista

//06 - mostrar o maior numero da minha lista 

//07 mostrar a média da minha lista


function valueInp(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else {
        return false
    }
}

function inList(n,l) {
    if(l.indexOf(Number(n)) != -1) {
            return true // valor encontrado por que quando o indexOF retorna (-1), quer dizer que ele encontrou.
    }
    else {
        return false // Valor não encontrado, provavelmente ele me retornou -1, indicando que o valor nao foi encontrado.
    }
}

function addNum() {
    if(valueInp(num.value) && !inList(num.value,list)){
        list.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Numero adicionado foi ${num.value}`
        res.appendChild(item)
        console.log(list)
        
    }
     else {
        window.alert('Numero invalido ou já existente !')
     }
     num.value = ''
     num.focus()
}

function finalizar() {

 

    if(list.length == 0) {
        window.alert('A lista está vazia');
    }
    else {
        let tot = list.length
        let maior = list[0]
        let menor = list[0]
        let soma = 0
        let media = 0
    
        for(let i in list){
            soma += list[i]
            if(list[i] > maior ) { // se minha lista na posição i for maior que maior, então maior é igual a List
                maior = list[i]
            }
            if(list[i] < menor){
                menor = list[i]
            }
        }
        media = soma/tot

        finList.innerText = ''
        finList.innerHTML += `<li>Total de numeros no array é de ${tot}</li>`
        finList.innerHTML += `<li>O numero maior é ${maior}</li>`
        finList.innerHTML += `<li>O numero menor é ${menor}</li>`
        finList.innerHTML += `<li>A media é  ${media}</li>`
        finList.innerHTML += `<li>Somando todos os valores temos ${soma}</li>`
        
    }
}


