 function allPositive(array) {
  for (let num of array) {
    if (num <= 0) {
      return false;
    }
  }
  return true;
}

console.log(allPositive([1, 2, 3, 4, 5])); // true
console.log(allPositive([1, 2, -3, 4, 5])); // false
console.log(allPositive([0, 0, 1])); // false
console.log(allPositive([])); // true
console.log(allPositive([100])); // true