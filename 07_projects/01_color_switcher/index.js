// color switcher

// step 1: select all html elements
const gray = document.querySelector("#gray");
const white = document.querySelector("#white");
const blue = document.querySelector("#blue");
const yellow = document.querySelector("#yellow");
const btn = document.querySelectorAll(".button");
const body = document.querySelector("body");

// add event on color-box

// colorBox.addEventListener("click", (e) => {
//   const id = colorBox.getAttribute("id");
//   console.log(id);
// });

btn.forEach((btn) => {
  //   console.log(btn);
  btn.addEventListener("click", (e) => {
    // console.log(e.target.id);
    // body.style.backgroundColor = `${e.target.id}`;

    if (e.target.id == "gray") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "yellow") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
