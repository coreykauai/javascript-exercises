const palindromes = function (str) {
  let originalLetters = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = originalLetters.length - 1;

  while (left < right) {
    if (originalLetters[left] !== originalLetters[right]) return false;

    left++;
    right--;
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
