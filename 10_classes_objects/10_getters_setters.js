//

class User {
  constructor(emil, password) {
    this.emil = emil;
    this.password = password;
  }

  get emil() {
    return `${this._emil}`;
  }

  set emil(value) {
    this._emil = value;
  }

  get password() {
    return `${this._password.toUpperCase()}shubham`;
  }

  set password(value) {
    this._password = value;
  }
}

const shubham = new User("s@shubham.ai", "abc");
console.log(shubham.password);
console.log(shubham.emil);
