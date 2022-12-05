function RecebeNumeros(x , y){
       return x > y ? x : y
}

console.log(RecebeNumeros(200,150))



//Código melhorado

const max2 = (x,y) => x > y ? x : y; // se x for maior que y me retorna x, se nao, me retorna y.

console.log(max2(40, 59))