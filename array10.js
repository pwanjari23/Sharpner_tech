// SUFFIX SUM

// Formula: suffix[i] = suffix[i + 1] + arr[i]

function suffixSum(arr) {
    let n = arr.length;
    let suffix = [];
    suffix[n - 1] = arr[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] + arr[i];
    }
    return suffix;
}

console.log(suffixSum([2, 3, 5, 6, 7, 9]))
