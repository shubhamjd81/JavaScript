// random Color
const hex = "0123456789ABCDEF";
let color = "#";
const btnStart = document.querySelector("#start");
const btnStop = document.querySelector("#stop");
const body = document.querySelector("body");

const randomColor = function () {
  color = "#";
  for (let i = 0; i < 6; i++) {
    //
    const random = Math.floor(Math.random() * 10);
    color += hex[random];
    // body.style.backgroundColor = `${color}`;
  }

  return color;
};
let intervalID;
const startChangingColor = function () {
  //
  if (!intervalID) {
    intervalID = setInterval(changeColor, 1000);
  }

  function changeColor() {
    body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalID);
  intervalID = null;
};
btnStop.addEventListener("click", stopChangingColor);
btnStart.addEventListener("click", startChangingColor);
console.log(color);
