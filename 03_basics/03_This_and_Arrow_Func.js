// This Keyword

const user = {
  username: "Shubham",
  coursePrice: 999,
  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website.`);
    // console.log(this);
  },
};

// Note : This keyword refers to current context.
// user.welcomeMessage();

// console.log(this);

function chai() {
  const username = "shubham";
  //   console.log(this.username);
}

// chai();

// const chai = () => {
//   const username = "shubham";
//   console.log(this.username);
// };

const addTwoNumber = (num1, num2) => {
  return num1 + num2;
};

console.log(addTwoNumber(3, 4));
