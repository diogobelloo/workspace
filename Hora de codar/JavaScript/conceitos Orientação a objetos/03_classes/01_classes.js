let cachorro = {
    patas:4,
    raca:'SRD',
    latir: function(){
        console.log('auau')
    }
}

let labrador = Object.create(cachorro)

labrador.latir()
labrador.raca = "Labrador"

console.log(labrador.raca)
console.log(cachorro.raca)

let dogalemao = Object.create(cachorro);

dogalemao.raca ='Dog alemao'

console.log(dogalemao.raca)