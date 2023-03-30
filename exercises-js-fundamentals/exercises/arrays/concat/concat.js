
export function concat(leftArray, rightArray) {
  let result = [];
  for (let i = 0; i < leftArray.length; i++) {
    result.push(leftArray[i]);
  }
  for (let i = 0; i < rightArray.length; i++) {
    result.push(rightArray[i]);
  }
  return result;
}

console.log(concat([1,2,3,4,5] ,[6,7,8,9,10]));
