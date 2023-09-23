//  Array part 2

// const marvel_heros = ["thor", "IronMan", "SpiderMan"];
// const dc_heros = ["flash", "superMan", "batMan"];

// marvel_heros.push(dc_heros); // push method adds array, inside array

// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

// concat method
// const allHeros = marvel_heros.concat(dc_heros); // It returns new array combining two or three arrays.
// console.log(allHeros);

//Spread Operator
// const allNewHeros = [...marvel_heros, ...dc_heros]; // spread returns new array combining multiple array
// console.log(allNewHeros);

// flat method

// const anotherArray = [1, 2, [3, 4], 5, [6, 7, [8]], [9]];
// const realAnotherArray = anotherArray.flat(Infinity); // flat returns new array, by simplifying array inside array, upto multiple depth.

// console.log(realAnotherArray);

// isArray() from() methods

// console.log(Array.isArray("Shubham"));
// console.log(Array.from("Shubham")); // from() returns new array from given elements.

// console.log(Array.from({ name: "Shubham" })); // when object is given as input from() will return empty array.

// of()

const score1 = 100;
const score2 = 200;
const score3 = 300;

// console.log(Array.of(score1, score2, score3)); // of() will return new array, from set of elements (variables, arrays etc.).

// Note: of() can take multiple inputs to return new array.
// from() takes only one input to return new array
