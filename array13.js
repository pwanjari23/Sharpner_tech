// MAXIMUM 2D
var maximumWealth = function(arr) {
    let maxWealth = 0;

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;

        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }

        if (sum > maxWealth) {
            maxWealth = sum;
        }
    }

    return maxWealth;
};

let arr = [
    [7, 2, 4, 9, 1],
    [4, 7, 1]
];
console.log(maximumWealth(arr))
