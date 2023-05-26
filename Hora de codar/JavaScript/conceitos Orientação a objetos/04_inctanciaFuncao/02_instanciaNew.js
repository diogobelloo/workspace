function Cachorro(raca,pata,cor){
    this.raca = raca;
    this.patas = pata;
    this.cor = cor;
    this.uivar = function () {
        console.log('Auuuu')
    }
}

let eros = new Cachorro('eros', 4, 'preta')

console.log(eros)

eros.uivar();