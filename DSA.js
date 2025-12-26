// Find the sum of all numbers in an array.
// function sumOfArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum;
// }
// console.log(sumOfArray([1, 2, 3, 4, 5, 9]));

// Find the largest and smallest number in an array.
// function smallLarge(arr) {
//     let largest = -Infinity;
//     let smallest = Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//         if (arr[i] < smallest) {
//             smallest = arr[i];
//         }
//     }
//     return { largest, smallest };
// }
// console.log(smallLarge([1, 9, 635, 8]));

// Count how many times a specific number appears.
// function frequency(arr, element) {
//     let freq = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === element) {
//             freq++;
//         }
//     }
//     return freq;
// }
// console.log(frequency([1, 1, 2, 1, 4, 5, 2], 1));

// Print all even numbers in the array.
// function evenNo(arr) {
//     let even = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             even.push(arr[i])
//         }
//     }
//     return even; 
// }
// console.log(evenNo([1,2,3,4,5]));

// Count how many even and odd numbers are in an array.
// function evenOdd(arr) {
//     let even = 0;
//     let odd = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             even++;
//         } else {
//             odd++;
//         }
//     }
//     return { even, odd };
// }
// console.log(evenOdd([1, 2, 3, 4, 5, 6, 7, 8]));
// Check if a specific number exists in the array (Yes/No).
// function ifExist(arr, value) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === value) {
//             return "Yes"
//         }
//     }
//     return "No"
// }
// console.log(ifExist([1, 2, 6, 5, 4], 5));

// Find the index of the first occurrence of a number.
// function indexFirst(arr, value) {
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]===value){
//             return i;
//         }
//     }
//     return "not found"; 
// }
// console.log(indexFirst([1,2,4,6,4], 7));

// Replace all negative numbers with 0.
// function negativeNo(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             result.push(0)
//         }else{
//             result.push(arr[i])
//         }
//     }
//     return result;
// }
// console.log(negativeNo([-1, -2, -3, 1, 2, 3, -7]))
