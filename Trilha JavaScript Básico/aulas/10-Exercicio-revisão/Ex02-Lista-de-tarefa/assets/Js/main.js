const inputTarefa = document.querySelector('.input-nova-tarefa');
const btnTarefa= document.querySelector('.btn-add-tarefa');
const Tarefas = document.querySelector('.tarefas');


//function

function criaLi(){
    const li = document.createElement('li')
    return li;
}

function criaTarefa(textoInput){
   const li = criaLi()
   li.innerText = textoInput;
   Tarefas.appendChild(li)
}


//Event 

btnTarefa.addEventListener('click' , () => {
    if(! inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
})
