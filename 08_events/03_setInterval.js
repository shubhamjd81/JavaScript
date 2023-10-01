// setInterval()
const btnStart = document.querySelector("#start");
const btnStop = document.querySelector("#stop");
const sayDate = function (str) {
  console.log(str, Date.now());
};
const interval = function () {
  setInterval(sayDate, 1000, "shubham jadhav");
};

btnStart.addEventListener("click", function () {
  console.log("STARTED");
  interval();
});

btnStop.addEventListener("click", function () {
  console.log("STOPPED");
  clearInterval(interval);
});
