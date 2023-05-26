let arr = [1,2,3,4,5,6,7]
let nomes = ['Diogo belo dos santos']
let bool = [true, false, true]

let misturado = [1, 'Matheus', true]


console.log(arr[1]);
console.log(nomes[0]);
console.log(bool[0]);
console.log(misturado[1]);
console.log(arr[arr.length -1]);

function texto(){
    const nome = 'Diogo belo dos santos'
    const textoArray = nome.split('')
    console.log(textoArray)

    setInterval((textoArray) => {
        textoArray++
    },);
}
texto()
