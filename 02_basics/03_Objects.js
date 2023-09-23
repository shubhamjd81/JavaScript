// Objects

//Singleton object
// object.create

//Object literals

const mySym = Symbol("key1"); // I didn't understood symbol dataType.

const JsUser = {
  name: "Shubham",
  "full Name": "Shubham Jadhav",
  [mySym]: "myKey1",
  age: 25,
  location: "Solapur",
  email: "shubham@gmail.com",
  isLoggedIn: false,
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser."full Name") //can not access "string key", by . operator

// console.log(JsUser["full Name"]); // [] bracket helps to access "string key" values.

// console.log(JsUser[mySym]); // [] bracket used to access symbol dataType

// change value

JsUser.email = "shubham@microsoft.com";
// Object.freeze(JsUser); //freeze() locks object, doesn't allow changes.
JsUser.email = "shubham@chatgpt.com";
// console.log(JsUser);

// function inside object
JsUser.greeting = function () {
  console.log("Hello Js User");
};

// console.log(JsUser.greeting());

JsUser.greetingTwo = function () {
  console.log(`Hello JS user ${this.name}`);
};

// console.log(JsUser.greetingTwo());
