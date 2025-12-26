// MAXIMUM OF AN ARRAY 

// function maximum(arr) {
//     let max = arr[0]
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max;
// }
// console.log(maximum([1,5,2,6,3]));

// MINIMUM OF AN ARRAY 
// function minimum(arr) {
//     let min = arr[0]
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i]
//         }
//     }
//     return min;
// }
// console.log(minimum([1, 2, 4, 6, 8]));

// SUM OF AN ARRAY 
// function sum(arr){
//     let sum = 0;
//     for(let i = 0; i<arr.length; i++){
//         sum+=arr[i];
//     }
//     return sum;
// }
// console.log(sum([1,4,6,8]));

// AVERAGE OF ELEMENT IN ARRAY 
// function avg(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }
// console.log(avg([10, 5, 3, 8]));

// REVERSE ARRAY 
// function reverse(arr) {
//     let rev = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         rev.push(arr[i])
//     }
//     return rev;
// }
// console.log(reverse([1, 2, 3, 4, 5, 6]));

// 6. Write a function to check if an array is sorted in ascending order.
// function ascending(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i + 1]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(ascending([1,7,4,9]));

// 7. Write a function to check if an array is sorted in descending order.
// function descending(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < arr[i + 1]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(descending([9, 8, 7, 6, 5]));

//  8. Write a function to remove duplicate elements from an array.
// function removeDuplicate(arr) {
//     let duplicate = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!duplicate.includes(arr[i])) {
//             duplicate.push(arr[i])
//         }
//     }
//     return duplicate;
// }
// console.log(removeDuplicate([1,3,3,2,6,7,7]));

// 9. Write a function to merge two sorted arrays into one sorted array.
// function mergeArr(a, b) {
//     let result = [];
//     let j = 0;
//     let i = 0;
//     while (i < a.length && i < b.length) {
//         if (a[i] < b[j]) {
//             result.push(a[i])
//             i++;
//         } else {
//             result.push(b[j])
//             j++;
//         }
//     }
//     while (i < a.length) {
//         result.push(a[i]);
//         i++;
//     }

//     while (j < b.length) {
//         result.push(b[j]);
//         j++;
//     }
//     return result;
// }
// console.log(mergeArr([1, 3, 5], [2, 4, 6]))

// 10. Write a function to remove a specific element from an array
// function removeSpecific(arr, value) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== value) {
//             result.push(arr[i])
//         }
//     }
//     return result;
// }

// console.log(removeSpecific([1, 2, 3, 4, 5, 6], 5))

// 11. Write a function to find the index of a specific element in an array.
// 12. Write a function to find the frequency of each element in an array. 
// 13. Write a function to find the second largest element in an array.
// 14. Write a function to find the second smallest element in an array.
// 15. Write a function to find the union of two arrays.