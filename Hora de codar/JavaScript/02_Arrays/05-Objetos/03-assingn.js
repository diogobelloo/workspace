let carro = {
    portas: 2, 
    portamalas: '200 l',
    motor:'2.0'
}

let adicionais = {
    arcondicionado: true,
    tetoSolar:true
}

console.log(carro)

Object.assign(carro, adicionais)

console.log(carro);