// if
// const isLoggedIn = true;
// if (2 != 3) {
//   console.log("Executed");
// }

// 2 <= 2
// <,>,<=,>=,==,!=, ===

// const score = 200;

// if (score > 100) {
//   const power = "fly";
//   console.log(`user power: ${power}`);
// }

// const balance = 800;

// if (balance > 500) console.log(`balance is: ${balance}`), console.log("test");

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  //   console.log("Allow to buy course");
}

if (loggedInFromEmail || loggedInFromGoogle) {
  //   console.log("Allow to Log In");
}
