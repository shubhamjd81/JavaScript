const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "!@#$%^&*?~`/";

// Selectors
const passBox = document.querySelector("#passBox");
const totalChar = document.querySelector("#noOfChar");
const upperInput = document.querySelector("#upperCase");
const lowerInput = document.querySelector("#lowerCase");
const numberInput = document.querySelector("#numbers");
const symbolInput = document.querySelector("#symbols");

// Extracts element from RANDOM index
const getRadomData = (dataset) => {
  return dataset[Math.floor(Math.random() * dataset.length)];
};

const generatePassword = (password = "") => {
  if (upperInput.checked) {
    password += getRadomData(upperSet);
  }
  if (lowerInput.checked) {
    password += getRadomData(lowerSet);
  }
  if (numberInput.checked) {
    password += getRadomData(numberSet);
  }
  if (symbolInput.checked) {
    password += getRadomData(symbolSet);
  }
  //   console.log(password);
  if (password.length < totalChar.value) {
    return generatePassword(password);
  }

  console.log(truncateString(password, totalChar.value));

  const temPass = truncateString(password, totalChar.value);
  passBox.innerText = temPass;
};

// generatePassword();

document.querySelector("#generate").addEventListener("click", function () {
  generatePassword();
});

// trim string

function truncateString(str, num) {
  if (str.length > num) {
    let subStr = str.substring(0, num);
    return subStr;
  } else {
    return str;
  }
}
