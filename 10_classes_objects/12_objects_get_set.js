// objects
const User = {
  _email: "h@gmial.com",
  _password: "123abc",

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};

const tea = Object.create(User);
console.log(tea._email);
