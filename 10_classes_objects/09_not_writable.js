// PI
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);

const chai = {
  name: "chai",
  price: 250,
  isAvailable: true,
  orderChai: function () {
    console.log("function didn't worked");
  },
};

// console.log(chai);

const chaiDesc = Object.getOwnPropertyDescriptor(chai, "price");

// console.log(chaiDesc);

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
});

const noWritable = Object.getOwnPropertyDescriptor(chai, "name");
// console.log(noWritable);

for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key}, ${value}`);
  }
}
