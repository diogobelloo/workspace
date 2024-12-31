function soma() {
let num = document.getElementById("num");
let list = document.getElementById("list")
let n = Number(num.value);

list.innerHTML = ''

if(num.value.length == 0 ){
    window.alert('[ERRO] Digite um número');
}
else {
    for(let i = 0; i <= 10; i++){
       let item = document.createElement("option");
       item.innerText = `${n} * ${i} = ${n * i}`
       list.appendChild(item);
    }
}
}
