let num = 41;
let divisoes = 0;

// 1 5 

for(let i = 1; i <= num; i++){
    if(num % i === 0){
        divisoes++
    }
}


if(divisoes == 2){
    console.log(`O número ${num} é primo`)
}
else{
    console.log(`O numero ${num} não é primo`)
}