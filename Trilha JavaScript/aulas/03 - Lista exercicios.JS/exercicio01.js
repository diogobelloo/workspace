let etanol = 5
let gasolina = 5.60



let tipoComputivel = gasolina

let gastoMediokm = 12
let distanciaKm = 144

let somaGasolina = gasolina/12  
let resGasolina = somaGasolina * distanciaKm

let somaEtanol = etanol/12  
let resEtanol = somaEtanol * distanciaKm

if(tipoComputivel === gasolina ){
    console.log(resGasolina.toFixed(2))
}
else if(tipoComputivel === etanol){
    console.log(resEtanol.toFixed(2))
}