//

class User {
  constructor(username) {
    this.username = username;
  }
  logme() {
    console.log(`This is ${this.username}`);
  }

  //   static
  static createID() {
    return `123`;
  }
}

const user1 = new User("Shubham");
// console.log(user1.createID());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const shubham = new Teacher("shubham", "shubham@gmail.com");
console.log(shubham.logme());
