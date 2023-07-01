// function removeFromArray(array, target) {
//   let newArray = [];
//   for (let count = 0; count < array.length; count++) {
//     if (array[count] !== target) newArray.push(array[count]);
//   }
//   return newArray;
// }

var removeFromArray = function (array, ...args) {
  return array.filter((val) => !args.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
