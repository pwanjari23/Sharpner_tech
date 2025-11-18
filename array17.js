// SELECTION SORT 
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let maxIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[maxIndex]) {
                maxIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[maxIndex];
        arr[maxIndex]=temp;
    }
    return arr;
}
console.log(selectionSort([1,4,2,8,4,5]));