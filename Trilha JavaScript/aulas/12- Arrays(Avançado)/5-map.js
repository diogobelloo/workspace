//Dobre os números
//
const products = ["teclado", "mouse", "Monitor"];

//Percorrendo os intens do array
products.map((item) => {
    console.log(item)
 });


//utilizando novo objeto retorado
const formatted = products.map((product) => {
    //return product.toUpperCase()
    return {
        id:Math.random(),
        description: product,
    }

})
console.log(formatted)

const pessoas = [
    {nome: 'Diogo', idade: 18},
    {nome:'Belo', idade: 50},
    {nome: 'norman', idade: 81},
    {nome:'Leda', idade: 54},
    {nome: 'Samuel', idade: 45}, 
]

//Retorne apenas a uma string com o cnome da pessoa
const nomes = pessoas.map((obj) => {
    return obj.nome;
});
console.log(nomes)


// Remova apenas a chave 'nome' do objeto
const idades = pessoas.map((obj) => {
    return {idade: obj.idade};
});
console.log(idades)


//Adicione uma chave id em cada objeto (id)
const comIds = pessoas.map((obj, indice) => {
    const newObj = {...obj}; //Clonando o objeto e adicionando id com valor do indice (isso para não alterar o array original)
    newObj.id = indice;
    return newObj;

})
console.log(comIds)