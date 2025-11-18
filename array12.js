// MINIMUM 2D

var min_array = function (arr) {
    let minValue = Infinity;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] < minValue) {
                minValue = arr[i][j];
            }
        }
    }

    return minValue;
};

let arr = [
    [7, 2, 4, 9, 1],
    [4, 7, 1]
];
console.log(min_array(arr))