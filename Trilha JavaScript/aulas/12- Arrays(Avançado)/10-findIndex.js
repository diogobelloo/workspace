// O método findIndex() retorna o indice do array do primeiro elemento ue satisfaz a condição. Caso contrario, retorna -1, indicando que nenhum elemento passou no teste.

const values = [4,6,8,12]

//}Obtendo primeiro indice que o valor é maior do que 4
const index = values.findIndex((value)=> {
  return  value > 4
})

console.log(index)
console.log(values[index])


//Exemplo quando não encontra, ele me retornará -1, como foi especificado logo acima.
console.log(values.findIndex(value => value > 12))
