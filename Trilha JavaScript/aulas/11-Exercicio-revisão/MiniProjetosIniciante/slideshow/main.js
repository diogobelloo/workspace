'use strict';

const images = [                               //aqui foi criuado um objeto com as urls da imagens 
    {'id':'1', url:'./img/chrono.jpg'},
    {'id':'2', url:'./img/inuyasha.jpg'},
    {'id':'3', url:'./img/tenchi.jpg'},
    {'id':'4', url:'./img/tenjhotenge.jpg'},
    {'id':'5', url:'./img/yuyuhakusho.jpg'},
    {'id':'6', url:'./img/ippo.png'},
]

const containerItems = document.querySelector('#container-items'); // guardando em uma variavel o container que irá as fotos 

const loadImages = (images,container) => { // função com dois parametros, 
    images.forEach (image => {  //for each para percorrer o array(objetos)
        container.innerHTML += `
            <div class='item'> 
            <img src='${image.url}'
            </div>
        `
    })
}

loadImages(images, containerItems);
let items = document.querySelectorAll('.item')

const previous = () => {
    containerItems.appendChild(items[0])
    items = document.querySelectorAll('.item');
}
const next = () => {
    const lastItem = items[items.length -1]
    containerItems.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)