const cachorro = {
    raca: 'alemão',
    uivar: function() {
        console.log('auuuuuuuu')
    },
    rosnar: function() {
        console.log('Grrrrrr')
    },
    setRaca: function(raca)  {
        this.raca = raca;
    },
    getRaca: function(){
        return "Raça é " + this.raca;
    }
 }

 console.log(cachorro.raca);

 cachorro.setRaca('Pastor Alemão');

 console.log(cachorro.raca);

 console.log(cachorro.getRaca())
