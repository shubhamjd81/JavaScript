// SingleTon Object

const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "Shubham";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

//Nested Object
const regularUser = {
  email: "shubham@gamil.com",
  fullName: {
    fullname: {
      firstName: "Shubham",
      lastName: "Jadhav",
    },
  },
};

// console.log(regularUser.fullName.fullname);

// Merging two different arrays

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
// const obj3 = { obj1, obj2 };

// const obj3 = Object.assign({}, obj1, obj2); //Object.assign() returns new object merging all objects.

// spread operator, 90% of the time it will be used.
const obj3 = { ...obj1, obj2 };
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "s@gmail.com",
  },
  {
    id: 1,
    email: "s@gmail.com",
  },
  {
    id: 3,
    email: "j@gmail.com",
  },
];

// console.log(users[2].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// De-Structuring of Object.

const course = {
  courseName: "Js in Hindi",
  price: "999",
  courseInstructor: "Hitesh",
};

const { courseInstructor, price, courseName } = course; //This is de-structuring of object

console.log(price);

// JSon

// {
//     "name":"Shubham",
//     "Course":"Js In Hindi",
//     "Instructor":"Hitesh",
// }
