let name = "shubham";
let repoCount = 34;

console.log(`My name is ${name}. My repo count is ${repoCount}`);

let gameName = new String("SHUBHAM");

console.log(gameName.toLowerCase());

let newString = gameName.substring(0, 4);
console.log(newString);

let anotherString = gameName.slice(-7, 3);
console.log(anotherString);

let trimString1 = new String("    MCA   ");

let trimmed = trimString1.trim();

console.log(trimString1);
console.log(trimmed);

let string2 = new String("https://shubham.com/profile%20logged");

console.log(string2.replace("%20", "-"));

let url = new String("shubham-jadhav");
console.log(url.includes("abc"));

console.log(url.split("-"));
