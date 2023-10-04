//
const myName = "shubham     ";

// console.log(myName.trim().length);

//Inheritance

const User = {
  name: "Shubham",
  email: "shubham@gmail.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS Assignments",
  fullTime: true,
  __Proto__: TeachingSupport,
};

Teacher.__Proto__ = User;

// modern syntax

Object.setPrototypeOf(Teacher, TeachingSupport);

// String
const anotherUserName = "Shubham    ";
String.prototype.trueLength = function () {
  console.log(this);
  //   console.log(this.name);
  console.log(`This is true Length ${this.trim().length}`);
};

console.log();
anotherUserName.trueLength();
"hotel".trueLength();
"hitesh".trueLength();
