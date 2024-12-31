function* geradora1(){
    // Código
    yield 'Valor 1';
    // Código
    yield 'Valor 2';
    // Código
    yield 'Valor 3';
}


function* geradora2(){
    let i = 0
    
    while(true){
        yield i;
        i++;

    }
}
const g2 =  geradora2();
console.log(g2.next().value)
