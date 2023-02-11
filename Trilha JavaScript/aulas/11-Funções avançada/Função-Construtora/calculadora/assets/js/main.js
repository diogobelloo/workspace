function Calculadora () {
C

  this.capturaEnter = () => {
    this.display.addEventListener('keypress', (e) =>{
      if(e.keyCode === 13) this.realizaConta()
      
    })
  }

  this.realizaConta = () => {
    try{
      const conta =eval(this.display.value);
      if(!conta){
        alert('conta Invalida')
      }
      this.display.value = conta;
    }
    catch{

    }
  }

  this.del = () => { this.display.value = this.display.value.slice(0,-1)}

  this.clear = () => {this.display.value = '';}

  this.addNumDisplay = (el) => {
    this.display.value += el.innerText
    this.display.focus();
  }

  this.capturaCliques = () => {

    document.addEventListener('click', (event) => {

      const el = event.target;
      
      if(el.classList.contains('btn-num')){this.addNumDisplay(el);}
      if(el.classList.contains('btn-clear')){ this.clear();}
      if(el.classList.contains('btn-del')){ this.del();}
      if(el.classList.contains('btn-eq')){ this.realizaConta();}
    })
  }

this.inicia = () => {
  this.capturaCliques();
  this.capturaEnter();
}
}
const calculadora = new Calculadora();
calculadora.inicia();