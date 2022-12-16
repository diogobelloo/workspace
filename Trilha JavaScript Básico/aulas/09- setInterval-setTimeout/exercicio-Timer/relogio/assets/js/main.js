// new Date (0); 0123456

  function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',{  //Estou pegando minha data e retornando um TmieString
      hour12:false,
      timeZone: 'GMT'     // Vai zerar a minha hora.
    
    })
  }


  const relogio = document.querySelector('.relogio');
  const iniciar = document.querySelector('.iniciar');
  const pausar = document.querySelector('.pausar');
  const zerar = document.querySelector('.zerar');
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

