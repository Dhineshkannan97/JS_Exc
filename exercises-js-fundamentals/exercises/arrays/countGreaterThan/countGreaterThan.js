function countGreaterThan(array, threshold) {
  let count = 0;
  for (let num of array) {
    if (num > threshold) {
      count++;
    }
  }
  return count;
}
console.log(countGreaterThan([1, 2, 3, 4, 5], 2) === 3);
console.log(countGreaterThan([1, 2, 3, 4, 5], 17) === 0);

