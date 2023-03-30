function countLessThan(array, threshold) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < threshold) {
      count++;
    }
  }
  return count;
}
console.log(countLessThan([1, 2, 3, 4, 5], 2) === 1);
console.log(countLessThan([1, 2, 3, 4, 5], 17) === 5);
console.log(countLessThan([1, 2, 1, 2, 3, 4, 1, 2, 1], 1) === 0);