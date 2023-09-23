const userEmail = [];

if (userEmail) {
  //   console.log("Got the Email");
} else {
  //   console.log("Not got the Email");
}

// falsy values
// false, 0, -0, bigInt 0n, "", undefined, null, NaN

// truthy values
// truth, "0", " ", 'false', [], {}, function(){}

if (userEmail.length === 0) {
  //   console.log("Array is Empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  //   console.log("Object is Empty");
}

// interview question
// false == 0; -> true
// 0 == ""; -> true
// false == ""; -> true

// nullish coalescing operator ?? null undefined
// Note: in case of null value, it assigns default value.

let val1;
// val1 = 5 ?? 10;
val1 = null ?? 10;
// val1 = undefined ?? 15;
// val1 = null ?? 10 ?? 20;

// console.log(val1);

// Ternary Operator:
// condition ? true : false

const iceTeaPrice = 100;

// iceTeaPrice <= 80
//   ? console.log("less than 80")
//   : console.log("Greater than 80");
