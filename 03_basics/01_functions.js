function SayMyName() {
  console.log("S");
  console.log("H");
  console.log("U");
  console.log("B");
  console.log("H");
  console.log("A");
  console.log("M");
}

// SayMyName()

// function addTwoNumber(num1, num2) {
//   console.log(num1 + num2);
// }

function addTwoNumber(num1, num2) {
  //   let result = num1 + num2;
  return num1 + num2;
}

const result = addTwoNumber(2, 3);

// console.log("result :", result);

function loggedInUserMessage(username = "Sam") {
  // if (!username)
  if (username === undefined) {
    console.log("Please Enter a User Name");
    return;
  } else {
    return `${username} just logged in.`;
  }
}

// console.log(loggedInUserMessage());

// Part 2 Functions 29/08/23

function addCartPrice(...num1) {
  let num;
  for (let i = 0; i < num1.length; i++) {
    num = num + num1[i];
    console.log(num);
  }

  return num;
}

// Note : ...SpreadOperator used when no. of arguments are unknown. ex- in shopping cart user may add any no. of items.

console.log(addCartPrice(200, 300, 400, 500));

const user = {
  userName: "Shubham",
  price: 999,
};

function handleObject(anyObject) {
  console.log(
    `User name ${anyObject.userName}. Course price ${anyObject.price}`
  );
}

// handleObject(user);
// handleObject({
//   userName: "Sam",
//   price: 399,
// });

const mySecondArray = [200, 400, 600];

function secondValueOfArray(anyArray) {
  // return anyArray[1];
  for (let i = 0; i < anyArray.length; i++) {
    const num = anyArray[i];
    console.log(num);
  }
}

// console.log(secondValueOfArray(mySecondArray));
