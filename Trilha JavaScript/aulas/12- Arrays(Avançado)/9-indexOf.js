//Esse método é utilizado para quando quermos encontrar um determinado elemento, lembrando que quando não encontra, ele retornara -1.

let fruits = ["maça", "uva", "pera", "morando"];

let busca = fruits.indexOf("maça")
console.log(busca)

fruits.splice(1,2)
console.log(fruits)