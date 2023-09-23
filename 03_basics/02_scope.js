// Scope

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a); //throws error
// console.log(b); // throws error
// console.log(c); // output 30

// Part 2

function one() {
  const username = "Shubham";

  function two() {
    const website = "youtube";
    console.log("username ", username);
  }
  console.log(website);

  two();
}

// one();

if (true) {
  const username = "shubham";
  if (username === "shubham") {
    const website = "youtube";
    // console.log(username + "" + website);
  }
  //   console.log(website);
}
// console.log(username);

// console.log(addOne(5));
function addOne(num) {
  return num + 1;
}

const addTwo = function (num) {
  return num + 1;
};

// console.log(addTwo(8));

// console.log(addThree);

const addThree = 50;

// Next chapter THIS and Arrow function
