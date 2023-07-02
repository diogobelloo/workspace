function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}
console.log(getMaxOfArray([1,2,4,6]))