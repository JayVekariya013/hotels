const fs = require("fs");
const { result } = require("lodash");
const os = require("os");

/* 1. File System (fs) Task - Read and Write a File
    Write a script that creates a file named test.txt and writes the text "Hello, Node.js!" into it.
    Then, read the contents of the file and print them to the console.
    Use the fs module for this task.
*/

fs.writeFile("test.txt", "Hello, Node.js!", () => {});
fs.readFile("test.txt", "utf8", (err, data) => {
  console.log(data);
});

/* 2. Operating System (os) Task - System Information
    Write a script to display the following system information:
    Total memory of the system.
    Free memory.
    Hostname.
    OS platform.
    Use the os module.
*/

console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("Hostname:", os.hostname());
console.log("OS Platform:", os.platform());

/* 3. Callback Function Task - Array Manipulation
    Write a function manipulateArray(arr, callback) that takes an array and a callback function.
    The function should double each number in the array using the callback and print the resulting array.
    Example: For input [1, 2, 3], the output should be [2, 4, 6].
*/
const arrNum = [1, 2, 3];

function arrMultiplier(arr) {
  return arr.map((x) => x * 2);
}

function manipulateArray(arr, callback) {
  console.log("Input array:", arr);
  const result = callback(arr);
  console.log("Output array:", result);
}

manipulateArray(arrNum, arrMultiplier);

/*
4.Function as First-Class Citizens
    Task:
    Write a script where you define a function calculate that accepts three parameters:
    A number (a)
    Another number (b)
    A callback function (operation)
    Based on the callback function, perform an operation like addition, subtraction, multiplication, or division on a and b.
*/

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

function calculate(num1, num2, operation) {
  console.log("Output : " + operation(num1, num2));
}

calculate(50, 2, add);
calculate(50, 2, subtract);
calculate(50, 2, multiply);
calculate(50, 2, divide);

/*
5. Higher-Order Function with Array Methods
    Task:
    Write a function processNumbers that:
    Takes an array of numbers and a callback function.
    The callback can be used to filter even/odd numbers or calculate the square of each number.
    Use Array.prototype.filter or Array.prototype.map inside the function.
*/

const arr = [1, 2, 3, 4, 5];

function filterEven(array) {
  return array.filter(evenNums);
}
function evenNums(num) {
  if (num % 2 == 0) {
    return num;
  }
}
function filterOdd(array) {
  return array.filter(oddNums);
}
function oddNums(num) {
  if (num % 2 != 0) {
    return num;
  }
}
function squareNumbers(array) {
  return array.map((x) => x * x);
}

function processNumbers(array, operations) {
  const result = operations(arr);
  console.log("Output :: " + result);
}

processNumbers(arr, filterEven);
processNumbers(arr, filterOdd);
processNumbers(arr, squareNumbers);
