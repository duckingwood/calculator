// Simple arithmetic calculator app

/**
 1. Move Global functions into an object literal.
 2. Use bracket notation to invoke the appropriate method
 */

const calculator = {
  add: function add(a, b) {
    return Number(a) + Number(b);
  },
  subtract: function subtract(a, b) {
    return a - b;
  },
  multiply: function multiply(a, b) {
    return a * b;
  },
  divide: function divide(a, b) {
    return a / b;
  },
  remainder: function remainder(a, b) {
    return a % b;
  }
};

console.log(calculator.add(1, 2));

const form = document.querySelector("form");
const num1 = document.querySelector("#num-1");
const num2 = document.querySelector("#num-2");
const select = document.querySelector("select");

// use an anonymous callback function as the 2nd argument
form.addEventListener("submit", function(event) {
  // Prevent the default browser behavior DON'T submit
  event.preventDefault();

  // form inputs have a property called value
  console.log(num1.value, num2.value, select.value);
});
