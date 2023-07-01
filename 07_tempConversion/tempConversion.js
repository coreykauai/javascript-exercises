const convertToCelsius = function (f) {
  // take temp minus 32, * 5, / 9
  // den round um
  return Math.round((f - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (c) {
  // c * 1.8 + 32
  //roundup
  return Math.round(((c * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
