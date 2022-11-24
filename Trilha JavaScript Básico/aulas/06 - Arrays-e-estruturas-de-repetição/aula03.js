
const nome = 'Diogo Belo Dos Santos'

const notas = [];

notas.push(4);
notas.push(3);
notas.push(8);
notas.push(10);
notas.push(10);
notas.push(4);
notas.push(4);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
    
}


const media = soma / notas.length;  // notas.length são a quantidade de arrays que tenho no push
console.log(media);