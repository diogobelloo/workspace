

let fruits = ["maça", "uva", "pera", "morando"];

let busca = fruits.indexOf("maça")
console.log(busca)

fruits.splice(busca,1)
console.log(fruits)

//Remove um intem pela posição do iten
//assim, se ele achar o item com nome "maça, ele ira removelo do array"