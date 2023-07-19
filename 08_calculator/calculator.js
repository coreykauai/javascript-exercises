const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numarray) {
  let result = 0;
  for (let i = 0; i < numarray.length; i++) {
    result += numarray[i];
  }
  return result;
};

const multiply = function (...args) {
  let results = 1;
  for (let i = 0; i < args.length; i++) {
    results *= args[i];
  }
  return results;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (n) {
  let answer = 1;
  for (let i = n; i > 0; i--) {
    answer *= i;
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
