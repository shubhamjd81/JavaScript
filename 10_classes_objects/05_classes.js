// ES6

class User {
  constructor(username, email, password) {
    (this.username = username),
      (this.email = email),
      (this.password = password);
  }

  encryptPassword() {
    return `${this.password}adbf`;
  }

  changeUserName() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("Shubham", "shubham@gmail.com", "123");
console.log(chai.encryptPassword());
console.log(chai.changeUserName());

// Behind the scene

function User1(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User1.prototype.encryptPassword = function () {
  return `${this.password}adbf`;
};

User1.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new User1("tea", "tea@gmail.com", "123");

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
