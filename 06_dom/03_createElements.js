// Creating Elements in DOM

const div = document.createElement("div");
div.innerHTML = "<p>This is ParaGraph</p>";
// document.body.appendChild(div);

// div.setAttribute("class", "div03");
console.log(div.innerHTML);

//Appending elements using function

function addLanguage(langName) {
  const li = document.createElement("li");
  li.innerHTML = `${langName}`;

  document.querySelector(".language").appendChild(li);
}

addLanguage("python");
addLanguage("Ruby");
