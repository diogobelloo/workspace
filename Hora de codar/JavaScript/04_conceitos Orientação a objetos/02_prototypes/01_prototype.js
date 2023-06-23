let pessoas = {
    maos: 2
}

console.log(Object.getPrototypeOf(pessoas));

console.log(Object.getPrototypeOf(pessoas) === Object.prototype)

const pessoaNova = Object.create(pessoas); // Agora pessoa é o prototype de pessoas nova.

console.log(pessoaNova.maos);

console.log(pessoaNova.hasOwnProperty('maos')) // minha variavel pessoanova tem a propiedade maos ?
