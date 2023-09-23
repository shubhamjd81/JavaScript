/* There are 2 types of dataTypes 
1. primitive
2. non-primitive


1. primitive: 
there are 7 dataTypes:
String, Number, bigInt, undefined, null, Symbol, boolean.

const name = "shubham";
let number = 33;
let bigInt = 343479823424934983n;
let undefine;
let outSideTemp = null;

let id = Symbol(1234);
let anotherId = Symbol(1234);

let trueFalse = true;

console.log(typeof bigInt);
console.log(typeof id);

console.log(id == anotherId);



2. non-primitive (reference) dataTypes:
arrays, objects, functions

let heros = ["shaktiman", "doga", "naagraj"];

let myObje = {
  id: 1,
  name: "Shubham Jadhav",
  mobile: 9511642848,
};

function myFunction() {
  console.log("This is myFunction");
}
*/

// ######################### Stack, Heap Memory #######################

let myYouTubeName = "shubhamdotcom";
let anotherName = myYouTubeName;

anotherName = "shubhamYoutube";

console.log(myYouTubeName);
console.log(anotherName);

let myObj = {
  name: "Shubham",
  email: "shubham@gmail.com",
};

myObj.email = "jadhav@gmail.com";

let myObj2 = myObj;

console.log(myObj2);
