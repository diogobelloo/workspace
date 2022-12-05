function number(valor){
    if(typeof valor !== 'number') return NaN;
    if(valor % 5 === 0 && valor % 3 ===0) return 'FizzBuzz'
    if(valor % 3 === 0) return 'Fizz'
    else if(valor % 5 === 0) return 'Buzz'
    else  return valor
      
    

}

for (let i = 0; i <= 100; i++) {
     const element = number(i)
   
    console.log(i, element)
}

