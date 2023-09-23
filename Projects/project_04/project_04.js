const randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.getElementById("submit");
const userInput = document.getElementById("guessField");
const guessSlot = document.querySelectorAll(".guesses");
const lowOrHi = document.querySelector("#lowOrHi");
const remaining = document.querySelectorAll(".lastResults");
const resultParas = document.getElementById(".resultParas");

let p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //
  if (isNaN(guess)) {
    alert("Please Enter a Valid Number");
  } else if (guess < 1) {
    alert("Please Enter Number More than 1");
  } else if (guess > 100) {
    alert("Enter Number less than 500");
  }

  prevGuess.push(guess);
  if (numGuess >= 11) {
    displayGuess(guess);
    displayMessage(`Game Over, Random Number Was ${randomNumber}`);
  } else {
    displayGuess(guess);
    checkGuess(guess);
  }
}

function checkGuess(guess) {
  //
  if (guess === randomNumber) {
    displayMessage(`You guessed it right `);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Your Guess was TOO Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Your Guess was TOO High`);
  }
}

function displayGuess(guess) {
  //
  userInput.value = "";
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML += `${11 - numGuess} `;
}

function displayMessage(message) {
  //
  lowOrHi.innerHTML = `<h2> ${message} </h2>`;
}

function endGame() {
  //
}

function newGame() {
  //
}
