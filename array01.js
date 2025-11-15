function findMinWithLoop(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }

  let min = arr[0]; 
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {  
      min = arr[i];
    }
  }
  return min;
}

const numbers = [-10, -5, -30, 20, 3];
console.log(findMinWithLoop(numbers)); 
