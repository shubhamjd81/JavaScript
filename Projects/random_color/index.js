const getColor = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);
  document.body.style.backgroundColor = randomCode;

  document.querySelector("#color-code").innerText = randomCode;
  //   navigator.clipboard.writeText(randomCode);
};

//click call
document.querySelector("#btn").addEventListener("click", getColor);

//init call
getColor();
