const repeatString = function (str, times) {
  if (times < 0) {
    return "ERROR";
  }

  let resultStr = "";
  for (let i = 0; i < times; i++) {
    resultStr += str;
  }
  return resultStr;
};

// Do not edit below this line
module.exports = repeatString;
