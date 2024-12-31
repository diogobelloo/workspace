// new Date (0); 0123456
function segundosRelogio(segundos){
  let data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12:false,
    timeZone:'UTC'
  })
}
 
  const relogio = document.querySelector('.relogio');
  const iniciar = document.querySelector('.iniciar');
  const pausar = document.querySelector('.pausar');
  const zerar = document.querySelector('.zerar');
  let segundos = 0;
  let timer;

  function iniciaRelogio(){
    timer = setInterval(() => {
      segundos++
      relogio.innerHTML = segundosRelogio(segundos)
    }, 1000);
  }

  iniciar.addEventListener('click', () => {
    clearInterval(timer);
    iniciaRelogio();
    relogio.classList.remove('pausado')
  })
pausar.addEventListener('click', () => {
    clearInterval(timer);
    relogio.classList.add('pausado')
  })
zerar.addEventListener('click', () => {
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = '00:00:00'
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

