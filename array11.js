// RUNNING 

// formula: arr[i] = arr[i] + arr[i - 1];

function runningSum(arr) {
    let result = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        result.push(sum);
    }
    return result;
}

console.log(runningSum([2, 4, 6, 8, 5]))