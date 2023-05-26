function Cachorro(raca,pata,cor){
    this.raca = raca;
    this.patas = pata;
    this.cor = cor;
}

Cachorro.prototype.uivar = function(){
    console.log('Auuuuu')
}

Cachorro.prototype.latir = function(){
    console.log('Au  au')
}

let eros = new Cachorro('eros', 4, 'preta')

console.log(eros)

eros.uivar();
eros.latir()