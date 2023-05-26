const a1 = [1, 2, 3]
const a2 = [1, 2, 3]
//const a3 = a1.concat(a2, [7,8,9], 'lkuiz')
// ... rest  -> ... spread
const a3 = [...a1, ...a2, ...[7,8,9]]

console.log(typeof a3)