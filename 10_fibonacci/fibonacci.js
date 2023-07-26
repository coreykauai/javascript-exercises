const fibonacci = function (position) {
  if (position < 0) {
    return "OOPS";
  }

  const sequence = [1, 1];
  for (let i = 2; i < position; i++) {
    sequence[i] = sequence[i - 2] + sequence[i - 1];
  }

  return sequence[position - 1];
};

// Do not edit below this line
module.exports = fibonacci;
