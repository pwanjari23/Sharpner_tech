function print_subarray(arr, length) {
    /*Function to print all the subarrays given in an array
    Input arr--> array, length -->length of an array */

    for (let i = 0; i < arr.length; i++) {
        let sub = "";
        for (let j = i; j < arr.length; j++) {   
            sub += arr[j];
            console.log(sub);
        }
    }
}

print_subarray([1,2,3,4,5])

