// concat();

var extract_number = function(arr1, arr2) {
    return arr1.concat(arr2);
};

console.log(extract_number([1,2,3,4,5], [10,1,15,20,25]));

// oddnum

var extract_number = function(nums) {
    let oddNum = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 !== 0) {
            oddNum.push(nums[i]);
        }
    }

    return oddNum;
};

console.log(extract_number([1,2,3,4,5,6,7,8,9]));