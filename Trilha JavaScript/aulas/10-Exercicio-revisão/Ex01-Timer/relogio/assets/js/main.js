


  const relogio = document.querySelector('.relogio');
  const iniciar = document.querySelector('.iniciar');
  const pausar = document.querySelector('.pausar');
  const zerar = document.querySelector('.zerar');

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

