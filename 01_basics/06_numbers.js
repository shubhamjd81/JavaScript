const score = 400;
// console.log(score)

const balance = new Number(100);
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

// Precision

const otherNumber = 23.897;
// console.log(otherNumber.toPrecision(3))

//localstring

const hundreds = 1000000
// console.log(hundreds.toLocaleString("en-IN"))

// ##################################### MATHAS 
// ########################################################

// console.log(Math)

// absolute
// console.log(Math.abs(-4))

// round
// console.log(Math.round(4.4))

// ceil
// console.log(Math.ceil(5.1))

// floor
// console.log(Math.floor(4.9))

// Random
console.log(Math.random())
console.log((Math.random() * 10) + 1)
console.log(Math.floor(Math.random() * 10) + 1)

const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max - min +1)) + min))