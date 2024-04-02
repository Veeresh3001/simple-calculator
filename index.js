let inputEl = document.getElementById("inputEl");
let buttons = document.querySelectorAll("button");

const splCar = ["*", "/", "+", "-", "="];

let output = "";

const calculator = (value) => {
  inputEl.focus();
  if (value === "=" && output !== "") {
    output = eval(output.replace("%", "*100"));
  } else if (value === "AC") {
    output = "";
  } else if (value === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && splCar.includes(value)) return;
    output += value;
  }
  inputEl.value = output;
};

buttons.forEach((each) => {
  each.addEventListener("click", (event) => {
    // console.log(event.target.dataset.value);
    calculator(event.target.dataset.value);
  });
});

// btnEl[0].addEventListener("click", function () {
//   alert("Hello");
// });
