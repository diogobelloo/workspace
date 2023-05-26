let pessoa = {
    nome:'Diogo',

}

let pessoa2 = pessoa

console.log(pessoa == pessoa2)

pessoa2.nome = 'Pedro'

console.log(pessoa.nome)

pessoa.nome ='Leda'

console.log(pessoa2.nome)