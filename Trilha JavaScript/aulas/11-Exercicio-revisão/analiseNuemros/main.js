//const NumberValue = document.getElementById('valueInp'); 
const btnAdd = document.querySelector('#btnAdd');
const select = document.querySelector('#select');
const numberValue = document.querySelector('#valueInp');



const addArray = (numberValue) => {
    numberValue = Number(numberValue.value)
    const arrayNumber = []
    arrayNumber.push(numberValue)
    return arrayNumber
}

const criaOption = () => {
    //select.textContent ='' caso queira que seja adicinado e apagado.
    const option = document.createElement('option');
    option.textContent = `Valor adicionado foi : ${addArray(numberValue)}`
    select.appendChild(option)
}

btnAdd.addEventListener('click', criaOption)

    