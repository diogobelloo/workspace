class Cachorro {
    constructor(raca,cor){
        this.raca = raca;
        this.cor = cor;
    }

    latir(){
        console.log('auauau')
    }

}
Cachorro.prototype.patas = 4

let dog = new Cachorro('pixe', 'branco');

console.log(dog);
console.log(dog.latir())
console.log(dog.patas);