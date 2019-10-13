// Simple arithmetic calculator app

const calculator = {
  add(a, b) {
    return Number(a) + Number(b);
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
  remainder(a, b) {
    return a % b;
  }
};

console.log();

const form = document.querySelector("form");
const num1 = document.querySelector("#num-1");
const num2 = document.querySelector("#num-2");
const select = document.querySelector("select");
const output = document.querySelector("output");

// use an anonymous callback function as the 2nd argument
form.addEventListener("submit", function(event) {
  // Prevent the default browser behavior DON'T submit
  event.preventDefault();

  output.textContent = calculator[select.value](num1.value, num2.value);
});
