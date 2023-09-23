// for of
// for of loop, usually applied on array

// ["","","",""]
// [{},{},{},{}]

let arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  //   console.log(num);
}

let greetings = "Hello World";

for (const greet of greetings) {
  //   console.log(`Each greeting is ${greet}`);
}

// Maps
const map = new Map();

map.set("IN", "India");
map.set("Fr", "France");

// console.log(map);

for (const [key, last] of map) {
  //   console.log(key, ":-", last);
}

// Objects

const myObject = {
  game1: "COD",
  game2: "GTA5",
};

// for (const [key, value] of myObject) {
//   //   console.log(key, ":-", last);
//   // Uncaught TypeError: myObject is not iterable
// }
