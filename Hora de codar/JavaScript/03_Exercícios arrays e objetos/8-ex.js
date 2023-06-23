const car = {
    "portas":4,
    "marca": "BMW",
    "tipo":"Sedan"
}

let jsonTostring = JSON.stringify(car);

let jsonOriginal = JSON.parse(jsonTostring)

console.log(car.portas)
console.log(car.marca)
console.log(car.tipo)

console.log(jsonTostring)

console.log(jsonOriginal)