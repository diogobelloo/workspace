function criaCachorro(raca, pata, cor) {
    let cachorro = Object.create({})
    cachorro.raca = raca;
    cachorro.pata = pata;
    cachorro.cor= cor;
    cachorro.latir = function () {
        console.log('Auau');
    }
    return cachorro
}


let doberman = criaCachorro('Doberman', 4, 'preta')

console.log(doberman)
doberman.latir()