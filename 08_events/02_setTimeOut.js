// setTimeout()
const btnStop = document.querySelector("#stop");
const sayShubham = () => {
  console.log("Shubham");
};

const changeText = function () {
  const h1 = document.querySelector("h1");
  h1.innerHTML = `Best JS Code`;
};
const changeMe = setTimeout(changeText, 2000);

btnStop.addEventListener("click", () => {
  clearTimeout(changeMe);
  console.log("STOPPED");
});
