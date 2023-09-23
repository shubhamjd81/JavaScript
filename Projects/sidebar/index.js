const sideBar = document.querySelector("#side-bar");
const hideShow = document.querySelector("#hide-show");
let status = false;

hideShow.addEventListener("click", function () {
  if (status == false) {
    sideBar.style.transform = `translate(0%)`;
    status = true;
    console.log(status);
  } else if (status == true) {
    sideBar.style.transform = `translate(-100%)`;
    status = false;
  }
});
