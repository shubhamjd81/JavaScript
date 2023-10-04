//
function User(email, password) {
  this.email = email;
  this.password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email;
    },
    set: function (value) {
      this._email = value;
    },
  });

  Object.defineProperty(this, "password", {
    get: function () {
      return this._password;
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const shubham = new User("shubham@gmail.com", "qwer");
console.log(shubham.email);
