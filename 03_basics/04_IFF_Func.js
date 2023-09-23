// IIFE (Immediate Invoked Function Expression)

// function chai() {
//   console.log("DB Connected");
// }

// chai();

(function chai() {
  // named IIFE
  console.log("DB Connected");
})();

// Note: First bracket is function definition, second bracket is function call.

((name) => {
  // no named IIFE
  console.log(`${name}`);
})("Shubhame");
