class Mamifero {
    constructor(patas){
        this.patas = patas;

    }
}

let coiote  = new Mamifero(4);

console.log(coiote.patas)

class Cachorro extends Mamifero{ // Minha class cachorro é filha da minha class mamifero.
    constructor(patas,raca){
        super(patas,patas);
        this.raca = raca;
    }

    letir(){
        console.log('auau');
    }
}

let pug = new Cachorro(4, "pug")

console.log(pug.patas)