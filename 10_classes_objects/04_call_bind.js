//call()

function setUserName(username) {
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  setUserName.call(this, username);
  this.email = email;
  this.password = password;
}

const chai = new createUser("Shubham", "shubham@gmail.com", "123");
console.log(chai);
