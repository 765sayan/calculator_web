const btn_1 = document.getElementById("1");
const btn_2 = document.getElementById("2");
const btn_3 = document.getElementById("3");
const btn_4 = document.getElementById("4");
const btn_5 = document.getElementById("5");
const btn_6 = document.getElementById("6");
const btn_7 = document.getElementById("7");
const btn_8 = document.getElementById("8");
const btn_9 = document.getElementById("9");
const btn_0 = document.getElementById("0");

const addition = document.getElementById("addition");
const subtraction = document.getElementById("subtraction");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");
const equal = document.getElementById("equal");
const point = document.getElementById("point");

const input = document.getElementById("input");

const clear = document.getElementById("clear");
const space = document.getElementById("space");
const memory = document.getElementById("memory");
const getmemory = document.getElementById("getmemory");

let inputValue = "";

let number_1 = "";
let number_2 = "";
let operator = "";

function displayInput() {
  input.value = inputValue;
}

clear.addEventListener("click", () => {
  inputValue = "";
  displayInput();
});

space.addEventListener("click", () => {
  inputValue = inputValue.slice(0, inputValue.length - 1);
  displayInput();
});

memory.addEventListener("click", () => {
  localStorage.setItem("memoryValue", inputValue);
  inputValue = "";
  displayInput();
});

getmemory.addEventListener("click", () => {
  let memoryValue = localStorage.getItem("memoryValue");
  localStorage.removeItem("memoryValue");
  inputValue = memoryValue;
  displayInput();
});

btn_1.addEventListener("click", () => {
  inputValue += "1";
  displayInput();
});

btn_2.addEventListener("click", () => {
  inputValue += "2";
  displayInput();
});

btn_3.addEventListener("click", () => {
  inputValue += "3";
  displayInput();
});

btn_4.addEventListener("click", () => {
  inputValue += "4";
  displayInput();
});

btn_5.addEventListener("click", () => {
  inputValue += "5";
  displayInput();
});

btn_6.addEventListener("click", () => {
  inputValue += "6";
  displayInput();
});

btn_7.addEventListener("click", () => {
  inputValue += "7";
  displayInput();
});

btn_8.addEventListener("click", () => {
  inputValue += "8";
  displayInput();
});

btn_9.addEventListener("click", () => {
  inputValue += "9";
  displayInput();
});

btn_0.addEventListener("click", () => {
  inputValue += "0";
  displayInput();
});

point.addEventListener("click", () => {
  inputValue += ".";
  displayInput();
});

addition.addEventListener("click", () => {
  if (inputValue !== "") {
    number_1 = inputValue;
    inputValue = "";
    operator = "+";
    displayInput();
  } else {
    alert("Enter Some number");
  }
});

subtraction.addEventListener("click", () => {
  if (inputValue !== "") {
    number_1 = inputValue;
    inputValue = "";
    operator = "-";
    displayInput();
  } else {
    alert("Enter Some number");
  }
});

multiplication.addEventListener("click", () => {
  if (inputValue !== "") {
    number_1 = inputValue;
    inputValue = "";
    operator = "*";
    displayInput();
  } else {
    alert("Enter Some number");
  }
});

division.addEventListener("click", () => {
  if (inputValue !== "") {
    number_1 = inputValue;
    inputValue = "";
    operator = "/";
    displayInput();
  } else {
    alert("Enter Some number");
  }
});

equal.addEventListener("click", () => {
  if (number_1 !== "") {
    number_2 = inputValue;
    if (operator === "+") {
      input.value = eval(`${number_1}${operator}${number_2}`);
      inputValue = input.value;
    } else if (operator === "-") {
      input.value = eval(`${number_1}${operator}${number_2}`);
      inputValue = input.value;
    } else if (operator === "*") {
      input.value = eval(`${number_1}${operator}${number_2}`);
      inputValue = input.value;
    } else if (operator === "/") {
      input.value = eval(`${number_1}${operator}${number_2}`);
      inputValue = input.value;
    } else {
      input.value = "Not Correct";
    }
  } else {
    alert("Enter Some number");
  }
});
