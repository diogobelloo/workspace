// retorne os números maiores que 10 

//               0  1   2   3  .......
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];



const numerosFiltrdos = numeros.filter( (valor) =>{
 console.log(valor)
 return valor > 10;
    /*if(valor > 10 ){
        return true
    }
    else{
        return false
    }*/
});
console.log(numerosFiltrdos)

//retorne pra mim pessoa que tem o nome com 5 letras ou mais
// retorne as pessoas com mais de 50 anos 
// retorne as pessos cujo nome termina com a

const pessoas = [
    {nome : 'Luiz', idade:62},
    {nome : 'Maria', idade:23},
    {nome : 'Eduardo', idade:55},
    {nome : 'João', idade:19},
    {nome : 'Diogo', idade:32},
    {nome : 'Samuel', idade:47}
]

const pessoaComNomeGrande = pessoas.filter((obj) => {
    return obj.nome.length >= 7
})

const pessoaMaisCinquenta = pessoas.filter((obj) =>{
    return obj.idade >= 50
})
const nomeTerminaComA = pessoas.filter((obj) =>{
    return obj.nome.toLowerCase().endsWith('a') 
})

console.log(pessoaMaisCinquenta)
console.log(nomeTerminaComA)


const products = [
    {description: "teclado", price:150, promotion: true },
    {description: "Mouse", price:150, promotion: false },
    {description: "tela", price:10, promotion: true }
]

const promotion = products.filter((product) => {
    return product.promotion === true
})

const price = products.filter((product) => {
   return  product.price < 150
})

const namesProduct = products.filter((product) => {
    return product.description === "teclado"
})

console.log(products)
console.log(price)
console.log(promotion)
console.log(namesProduct)

