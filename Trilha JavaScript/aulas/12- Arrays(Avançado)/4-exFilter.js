// retorne os números maiores que 10 
const numeros = [10,5,6,35,53,9,6]

const maioresQueDez = numeros.filter((valor) => {
    return valor >= 10
})

//console.log(numerosMaiorqueDez)
console.log(maioresQueDez)

//retorne pra mim pessoa que tem o nome com 5 letras ou mais
const pessoas = [
    {nome: 'Diogo', idade: 18},
    {nome: 'Leda', idade: 50},
    {nome: 'suelem', idade: 81},
    {nome: 'Samu', idade: 54},
    {nome: 'Eliza', idade: 45},
]

const pessoaMaisCincoLetras = pessoas.filter((valor) => {
    return valor.nome.length >= 5 
})  

console.log(pessoaMaisCincoLetras)


// retorne as pessoas com mais de 50 anos 
const pessoasMais50Anos = pessoas.filter((valor) => {
    return valor.idade > 50
})
console.log(pessoasMais50Anos)

// retorne as pessos cujo nome termina com a

const terminaComA= pessoas.filter((valor) => {
    return valor.nome.toLowerCase().endsWith('a') 
})
console.log(terminaComA)
