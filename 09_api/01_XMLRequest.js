//
console.log("Working");
const requestURL = "https://api.github.com/users/hiteshchoudhary";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestURL);
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (this.readyState === 4) {
    const data = JSON.parse(this.responseText);
    console.log(data.location);
  }
};
xhr.send();
