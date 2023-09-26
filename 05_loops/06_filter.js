// Filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => {
  return num > 4;
});

// console.log(newNums);

// forEach

const newNums1 = [];

// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums1.push(num);
//   }
// });

// console.log(newNums1);

const book = [
  {
    title: "book one",
    genre: "fiction",
    publish: "1998",
    edition: "2004",
  },
  {
    title: "book two",
    genre: "history",
    publish: "1981",
    edition: "2007",
  },
  {
    title: "book three",
    genre: "non-fiction",
    publish: "1995",
    edition: "2003",
  },
  {
    title: "book four",
    genre: "science",
    publish: "1992",
    edition: "2001",
  },
  {
    title: "book five",
    genre: "fiction",
    publish: "1923",
    edition: "2014",
  },
  {
    title: "book six",
    genre: "non-fiction",
    publish: "1949",
    edition: "2001",
  },
  {
    title: "book seven",
    genre: "science",
    publish: "1998",
    edition: "2014",
  },
  {
    title: "book eight",
    genre: "history",
    publish: "1996",
    edition: "1999",
  },
];

const userBooks = book.filter((bk) => {
  return bk.publish === "1996";
});

console.log(userBooks);
