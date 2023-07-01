const leapYears = function (year) {
  // catch years divisible by 4 wit no remainder but
  //while if it has remainder when dividing by 100 then no go, unless
  // unless you can divide um by 400. bra what.
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

// Do not edit below this line
module.exports = leapYears;
