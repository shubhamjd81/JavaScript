// ToDo List

const toDo = document.querySelector("userInput");

// addToDo function

function addToDo(toDoItem) {
  const li = document.createElement("li");
  li.innerHTML = `${toDoItem}`;

  const list = document.querySelector(".toDoList");
  list.appendChild(li);
}

//function caller
// const toDoListItems = ["Add ToDO"];

// function caller() {
//   const toDoItem = document.querySelector("#userInput").value;
//   toDoListItems.push(toDoItem);

//   const li = document.createElement("li");
//   const list = document.querySelector(".toDoList");
//   toDoListItems.forEach((item) => {
//     li.innerHTML = `${item}`;
//     list.appendChild(li);
//   });

//   //   addToDo(toDoItem);
//   console.log(toDoListItems);
// }

const toDoListItems = ["Add ToDO"];
const btn = document.createElement("button");

function caller() {
  const toDoItem = document.querySelector("#userInput").value;
  toDoListItems.push(toDoItem);

  const li = document.createElement("li");

  const list = document.querySelector(".toDoList");
  toDoListItems.forEach((item, index) => {
    (li.innerHTML = `${item}`), btn;
    list.appendChild(li);
    // list.appendChild(btn).innerHTML = "DEL";
    btn.setAttribute("class", `${index}`);
  });

  //   addToDo(toDoItem);
  //   console.log(toDoListItems);

  //   console.log(btn.getAttribute("class"));
}

// const btnVal = btn.getAttribute("class");

// console.log(btnVal);

// edit

const edit = document.querySelector("li:nth-child(1)");
edit.innerHTML = "hello";

// remove

edit.remove();
