//inheritance

class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`This is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`This course was added by ${this.username}`);
  }
}

const chai = new Teacher("chai", "shubham@gmail.com", "123");
console.log(chai.addCourse());

const tea = new User("tea");
tea.logMe();

console.log(chai instanceof Teacher);
