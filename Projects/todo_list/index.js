const item = document.querySelector("#item");
const toDoBox = document.querySelector("#toDoBox");

item.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    addToDo(this.value);
  }
});

const addToDo = (item) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `<li>${item}</li>`;

  toDoBox.appendChild(listItem);

  listItem.addEventListener("click", function () {
    this.classList.toggle(".done");
  });
};
