export function removeElement(array, element) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== element) {
      result.push(array[i]);
    }
  }
  return result;
}
 console.log(removeElement(['dhinesh','surya' ,'johnson'] , 'johnson')) ;