var sumOddLengthSubarrays = function(arr) {
    let totalSum = 0;
    let n = arr.length;

    for (let i = 0; i < n; i++){
        let left = i + 1;       // number of elements on left including itself
        let right = n - i;      // number of elements on right including itself

        let total = left * right;

        let oddCount = Math.floor((total + 1) / 2);

        totalSum += arr[i] * oddCount;
    }
    return totalSum;
};

let arr=[1,3,5,7,9]
console.log(sumOddLengthSubarrays(arr));