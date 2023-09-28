// select all html elements in js variables
// const height = document.querySelector("#height");
// const weight = document.querySelector("#weight");
// const divResult = document.querySelector(".result");
// const cal = document.querySelector("#cal");

// function BMI Calculator
// function bmi_calculate(e) {
//   //   e.preventDefault();
//   console.log(height.value);
//   console.log(weight.value);
//   const result = weight.value / (height.value / 100);
//   if (result == 18.6) {
//     console.log(`Under Weight : ${result}`);
//     divResult.innerHTML = `${result}`;
//   } else if (result == 18.6 <= 24.9) {
//     divResult.innerHTML = `${result}`;
//     console.log(`Normal Weight : ${result}`);
//   } else {
//     divResult.innerHTML = `${result}`;
//     console.log(`Over Weight : ${result}`);
//   }
// }

// 2nd approach
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector(".result");

  if (height === "" || height <= 0 || isNaN(height)) {
    result.innerHTML = `${height}`;
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    result.innerHTML = `${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // result.innerHTML = `${bmi}`;
    if (bmi < 18.6) {
      result.innerHTML = `your are under-weight ${bmi}`;
    } else if (bmi >= 18.6 || bmi <= 24.9) {
      result.innerHTML = `you are normal-weight ${bmi} `;
    } else if (bmi > 24.9) {
      result.innerHTML = `you are over-weight ${bmi}`;
    }
  }
});
