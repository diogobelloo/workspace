// O método find() retorna o valor do primeiro elemento do array que satisfizer a condição. Caso contrario, undefiner é retornado.


const values = [5, 13, 8, 140, 44]

const found = values.find(value=> value > 10)

console.log(found)

//Com Objetos 

const fruits = [
    {name: "apple", quantity: 23 },
    {name: "bananas", quantity: 23 },
    {name: "oranges", quantity: 23 }

]

const result = fruits.find(fruit => fruit.name === "bananas" )

console.log(result)