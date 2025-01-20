const num = document.querySelector('#valueInp')
const submit = document.getElementById('btnAdd');
const res = document.querySelector('#select')
const finList = document.querySelector('#resList')
let list = []


function valueInp(n) {
    if(Number(n) >= 1 && Number(n) <=100){
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

function adicionar() {
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

function finalizar () {
    if(list.length == 0){
        window.alert('Necessario adicionar um valor para finalizar.')
    }
    else {
        let maior = list[0]
        let menor = list[0]
        let soma = 0
        for(let i in list){
            soma += list[i]
            if(list[i] > maior){
                maior = list[i]
            }
            if(list[i] < menor) {
                menor = list[i]
            }
        }

        finList.innerText = ''
        let textres = document.createElement('li');
        textres.innerHTML += `<li>ao todo temos ${list.length} cadastro.</li>`
        textres.innerHTML += `<li>maior valor é igual a ${maior}.</li>`
        textres.innerHTML += `<li>menor valor é igual a ${menor}.</li>`
        finList.appendChild(textres)
        
    }
    
    
}