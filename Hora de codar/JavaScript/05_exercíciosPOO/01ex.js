class Conta{
    constructor(saldo){
        this.saldo = saldo ;
        
    }

    deposito(depositar){
          this.saldo += depositar;
    }
    
    saque(retira){
        this.saldo -= retira
    }
   
}

let conta = new Conta(1000);

conta.deposito(1000)


console.log(conta.saldo);

conta.saque(1200)

console.log(conta.saldo)



