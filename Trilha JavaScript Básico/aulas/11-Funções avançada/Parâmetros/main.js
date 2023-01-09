function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros){
        acumulador += numero;
    }
    console.log(acumulador);
    
}