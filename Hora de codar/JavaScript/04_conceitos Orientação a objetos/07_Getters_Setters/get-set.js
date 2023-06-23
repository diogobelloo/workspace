class Cachorro{ 
    constructor(raca,cor){
        this.raca = raca;
        this.cor= cor;
    }

    get verRaca(){
        return 'A raça é ' + this.raca;
    }

    set novaRaca(value){
        this.cor= value;
        
    }

}

let pitbul= new Cachorro('Pitbull', 'sem cor');
console.log(pitbul);

pitbul.novaCor = 'branca';

console.log(pitbul.novaCor)