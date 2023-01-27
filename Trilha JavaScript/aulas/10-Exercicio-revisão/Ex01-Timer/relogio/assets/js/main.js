<<<<<<< HEAD

=======
// new Date (0); 0123456

  function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',{  //Estou pegando minha data e retornando um TmieString
      hour12:false,
      timeZone: 'GMT'     // Vai zerar a minha hora.
    
    })
  }
>>>>>>> ff1ae0d66b5fe0bf95b47e071270b3b95e2565c9


  const relogio = document.querySelector('.relogio');
  const iniciar = document.querySelector('.iniciar');
  const pausar = document.querySelector('.pausar');
  const zerar = document.querySelector('.zerar');
<<<<<<< HEAD

  function horaRelogio(){
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-br', {
      hour12:false,
      timeZone: 'UTC'
    })
  }
  let timer;
  segundos = 0

  function relogioInicia(){
    timer = setInterval(() => {
      relogio.innerHTML = horaRelogio()
      segundos ++

    }, 1000);
    
  } 

  iniciar.addEventListener('click', () => {
    clearInterval(timer)
    relogioInicia()
    relogio.classList.remove('pausado')
  })

pausar.addEventListener('click', () => {
    clearInterval(timer)
    relogio.classList.add('pausado')
  })

 zerar.addEventListener('click', () => {
    clearInterval(timer)
    relogio.innerHTML = '00:00:00'
    segundos = 0
    relogio.classList.remove('pausado')
  })
=======
  let segundos = 0;
  let timer;

  function iniciaRelogio(){
      timer = setInterval(function() {
      segundos++;
      relogio.innerHTML = criaHoraDosdoSeguns(segundos);
    }, 1000)
  }


iniciar.addEventListener('click', function(event){
  relogio.classList.remove('pausado');
  clearInterval(timer) //clear no iniciar para não ficar bugando e pulando se clicar duas ou + vezes
  iniciaRelogio()
});
pausar.addEventListener('click', function(event){
  relogio.classList.add('pausado');
  clearInterval(timer);
  
});
zerar.addEventListener('click', function(event){
  relogio.classList.remove('pausado');
   clearInterval(timer);
   relogio.innerHTML = '00:00:00'
   segundos = 0;
});
>>>>>>> ff1ae0d66b5fe0bf95b47e071270b3b95e2565c9


/*
  document.addEventListener('click', function(e){
    const el = e.target;
    
    
    if(el.classList.contains('iniciar')){
      relogio.classList.remove('pausado');
      clearInterval(timer) //clear no iniciar para não ficar bugando e pulando se clicar duas ou + vezes
      iniciaRelogio()
    }

    if(el.classList.contains('pausar')){
      relogio.classList.add('pausado');
      clearInterval(timer);
    }

    if(el.classList.contains('zerar')){
      relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00'
    segundos = 0;
    }
   

  });
   */

