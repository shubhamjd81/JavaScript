//

function multipleBy5(num) {
  return num * 5;
}

multipleBy5.shubh = 2;

// console.log(multipleBy5(5));
// console.log(multipleBy5.shubh);
// console.log(multipleBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`Price is ${this.score}`);
};

// new keyword

const chai = new createUser("Chai", 25);
const tea = new createUser("Tea", 250);

// createUser.printMe();

console.log(chai);
console.log(tea);
