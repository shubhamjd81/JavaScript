// Object literal

const user = {
  username: "Shubham",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user details from databases");
    console.log(`loginCount : ${this.loginCount} `);
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// Constructor Function

function User(username, loggedInCount, isLoggedIn) {
  this.username = username;
  this.loggedInCount = loggedInCount;
  this.isLoggedIn = isLoggedIn;

  this.greetings = function () {
    console.log(`Welcome ${this.username}`);
  };
  //   return this;
}

const userOne = new User("Shubham", 14, true);
const userTwo = new User("Hitesh", 12, false);
console.log(userOne);
console.log(userTwo);
