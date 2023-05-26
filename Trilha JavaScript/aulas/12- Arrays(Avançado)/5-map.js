//Dobre os números
//
const numeros = [5,50,80,1,2,3,4,5,6,11,12,15,22,27,45];
 const dobro = numeros.map((valor) => {
    return valor * 2
 });
console.log(dobro)



const pessoas = [
    {nome: 'name', idade: 18},
    {nome:'name', idade: 50},
    {nome: 'name', idade: 81},
    {nome:'name', idade: 54},
    {nome: 'name', idade: 45}, 
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