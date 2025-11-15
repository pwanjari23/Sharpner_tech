function findMaxWithLoop(arr) {
  if (arr.length === 0) {
    return undefined; // Handle empty array case
  }
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const numbers = [22, 65, 1, 39];
const maxNumber = findMaxWithLoop(numbers);
console.log(maxNumber); // Output: 65