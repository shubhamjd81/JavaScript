const coding = ["js", "python", "ruby", "java"];

coding.forEach(function (item) {
  //   console.log(`${item}`);
});

coding.forEach(function (item, index, arr) {
  // console.log(`${(item, index, arr)}`);
});

coding.forEach(printMe);

function printMe(item) {
  //   console.log(item);
}

// array of object

const myObject = [
  {
    languageName: "Python",
    languageFileName: "py",
  },
  {
    languageName: "Java",
    languageFileName: "java",
  },
  {
    languageName: "JavaScript",
    languageFileName: "js",
  },
];

myObject.forEach((item) => {
  //   console.log(item.languageName);
});

const values = coding.forEach((item) => {
  console.log(item);
  //   return item;
});

// console.log(values);
