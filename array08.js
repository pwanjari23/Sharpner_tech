// MISSING NUMBER 
function missing(arr) {
    arr = arr.sort((a, b) => a - b);
    let missing = 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === missing) {
            missing++
        }
    }
    return missing;
}

console.log(missing([1, 4, 2, 3, 6]));