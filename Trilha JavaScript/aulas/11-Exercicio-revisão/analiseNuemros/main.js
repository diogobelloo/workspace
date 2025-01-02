//const NumberValue = document.getElementById('valueInp'); 
const btnAdd = document.querySelector('#btnAdd');
const select = document.querySelector('#select');
const numberValue = document.querySelector('#valueInp');
const result = document.querySelector('#resList');
const btnList = document.querySelector('#btnList');


const addArray = (numberValue) => {
    numberValue = Number(numberValue.value)
    const arrayNumber = []
    arrayNumber.push(numberValue)
    return arrayNumber
}

const criaOption = () => {
    //select.textContent ='' caso queira que seja adicinado e apagado.
    if(numberValue.value == 0 || numberValue.value > 100){
        window.alert('digite um número valido')
        option.textContent = ' '
    } 
    const option = document.createElement('option');
    option.textContent = `Valor adicionado foi : ${addArray(numberValue)}`
    select.appendChild(option)
}

const createResult = (arrayNumber) => {
    const li = document.createElement("li");
  
    li.textContent = `Temos ao todo ${arrayNumber.length}`;
    result.appendChild(li);
}
 
btnAdd.addEventListener('click', criaOption)
btnList.addEventListener('click', createResult)

    