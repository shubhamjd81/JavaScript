//Lexical Scoping

function outer() {
  username = "shubham";

  function inner() {
    let secret = "123abc";
    console.log("Inner", username);
  }

  function innerTwo() {
    console.log("innerTow", username);
    // console.log(secret);
  }
  //   inner();
  //   innerTwo();
  // console.log(secret);
}
outer();

// Closure
// It will return lexical scope of the function

function makeFun() {
  let name = "mozila";

  function displayName() {
    console.log("name : ", name);
  }
  return displayName;
}

const myFun = makeFun();
myFun();
