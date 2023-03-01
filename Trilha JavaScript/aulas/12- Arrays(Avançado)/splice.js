//                0        1        2         3
const nomes = ['Maria', 'Jõao', 'Gabriel', 'Júlia'];
//const removidos = nomes.splice(-2, Number.MAX_VALUE)

//console.log(nomes, removidos)

//pop
console.log(nomes, nomes.splice(-1, 1))

//push
console.log(nomes, nomes.splice(-1, 1, 'Adicionei'))

//shift
console.log(nomes, nomes.splice(0, 1))

//unshift
console.log(nomes, nomes.splice(0, 0, 'Adicionei'))

