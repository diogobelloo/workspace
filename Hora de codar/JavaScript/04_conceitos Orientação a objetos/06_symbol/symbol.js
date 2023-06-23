class Cachorro {
    constructor(raca,cor){
        this.patas = raca;
        this.cor = cor;
    }
}

let patas = Symbol();

Cachorro.prototype[patas] = 4

let goldren = new Cachorro('Goldren', 'parda')

console.log(Cachorro.prototype.raca)
console.log(Cachorro.prototype[patas])

