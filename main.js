// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**

// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:

console.log(new Date());

const displayDate = () => {
  const currentDate = new Date();

  document.getElementById("display-element").innerHTML = currentDate;
};

// Write a JavaScript program to convert a number to a string.

const numToStr = () => {
  x.toString();
};
const x = 55;

// Write a JavaScript program to convert a string to the number.

const userInput = "hello";
parseInt(userInput);

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// * Boolean

const addForm = document.forms["add-element"];

addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;
  console.log(value);
});

// const newLi = document.createElement("li");
// const newA = document.createElement("a");

// let userElement = "";
// let userList = document.getElementById("user-list");
// function updateWord(element) {
//   userElement = element.value;
//   console.log(userElement.type);
// }

const isTypeOf = (userElement) => {
  console.log(typeof userElement);
};

isTypeOf(20);

// * Null

const validateForm = (x) => {
  if (x == null) {
    return "null";
  }
  return x;
};

// * Undefined

const notDefined = (x) => {
  if (x === undefined) {
    return "Underfined";
  }
  return x;
};

console.log(notDefined(false));

// * Number

const myNumber = 4;
isTypeOf(myNumber);

// * NaN

const notANum = (x) => {
  if (isNaN(x)) {
    return NaN;
  }
  return x;
};

// * String

const input6 = "hello";
console.log(typeof input6);

// Write a JavaScript program that adds 2 numbers together.

const addTwoNumbers = (num1, num2) => {
  return num1 + num2;
};

addTwoNumbers(15, 28);

// Write a JavaScript program that runs only when 2 things are true.

const variable1 = 10;
const variable2 = 13;

if (variable1 && variable2) {
  console.log("two truths!");
}

// Write a JavaScript program that runs when 1 of 2 things are true.

const variable3 = true;
const variable4 = false;

if (variable3 || variable4) {
  console.log("one truth!");
}

// Write a JavaScript program that runs when both things are not true.

const variable5 = 0;
const variable6 = 0;

if (!variable5 && !variable6) {
  console.log("No truth!");
}

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey,
// 2. reload VS Code,
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html`
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.

// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
