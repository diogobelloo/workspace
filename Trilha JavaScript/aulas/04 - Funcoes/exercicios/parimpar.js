
const imparpar = (num) => {
    for(num = 0; num <= 100;num++){
        if(num % 2 == 0){
            return 'Par'
        }
        else{
            return 'Impar'
        }
    }
    
}

console.log(imparpar(10));