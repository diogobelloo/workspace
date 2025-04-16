/*
O método reduce é utilizado para reduzir um array a um únnico valor.

Parâmentros:

- Array original (values)
- Acumulador (acumulator)
- Valor de iteração (curruentValue)
- Valor inicial (0)
- Index (index da interação atual - opcional)

*/
 const values = [1, 2, 3, 4, 5]

 const sum = values.reduce((acumulator, currentValue, index) => {
    console.log("acumulator", acumulator)
    console.log("currentValue", currentValue)
    console.log("index", index)

    console.log("soma", acumulator + currentValue)
    console.log("############")

    return acumulator + currentValue
 },0)