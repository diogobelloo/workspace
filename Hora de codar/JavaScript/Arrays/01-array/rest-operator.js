let num = 1;
let num1 = 5;
let num2 = 32;
let num3 = 2;

function imprimirNumros(...args) {
    for(let i = 0; i < args.length; i++){
        console.log(args[i])
    }
}

imprimirNumros(num,num1,num2);
