function Calculadora () {
  this.display = document.querySelector('.display');

  this.display.addEventListener('keypress', (e) => {
    if(e.keyCode === 13){
      this.soma()
    }
  })

  this.soma = () => {
    try{
      const conta = eval(this.display.value);
      if(!conta){
        alert('Erro, conta inválida')
      }
      else{
        this.display.value = conta
      }
  } catch{
    alert('Erro, conta inválida')
  }
  }

  this.del = () => {this.display.value = this.display.value.slice(0,-1)}

  this.clear = () =>{this.display.value=''}
  

  this.addNumber = (el) => { 
    this.display.value += el.innerText
    this.display.focus();
  };
  

  this.capturaCliques = () =>{
    document.addEventListener('click', (e)=>{
      const el = e.target;
      if(el.classList.contains('btn-num')){this.addNumber(el)};
      if(el.classList.contains('btn-clear')){this.clear()};
      if(el.classList.contains('btn-del')){this.del()};
      if(el.classList.contains('btn-eq')){this.soma()};
    });
  }
   



  this.inicia = () => {
    this.capturaCliques();
  }
}

const calculadora = new Calculadora();
calculadora.inicia()