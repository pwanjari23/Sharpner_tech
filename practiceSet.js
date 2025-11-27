// // REVERSE 

// function reverse(n) {
//     let rev = 0;
//     while ( n > 0) {
//         let digit = n % 10;
//         rev = rev * 10 + digit;
//         n = Math.floor(n / 10);
//     }
//     return rev;
// }
// console.log(reverse(1234));

// PALINDROME

// function palindrome(n) {
//     let original = n;
//     let rev = 0;
//     while (n > 0) {
//         let digit = n % 10;
//         rev = rev * 10 + digit;
//         n = Math.floor(n / 10);
//     }

//     if (original === rev) {
//         console.log("Palindrome")
//     } else {
//         console.log("Not palindrome")
//     }
// }
// palindrome(121);

// ARMSTRONG

// function armStrong(n) {
//     let original = n;
//     let digits = n.toString().length;

//     let sum = 0;
//     while (n > 0) {
//         let digit = n % 10;
//         sum += digit ** digits;
//         n = Math.floor(n / 10);
//     }

//     if (sum === original) {
//         console.log("Number is Armstrong");
//     } else {
//         console.log("Number is not Armstrong");
//     }
// }

// armStrong(153);

// SUM OF DIGIT 
// function sumOfDigit(n) {
//     let sum = 0;
//     while (n > 0) {
//         let digit = n % 10;
//         sum += digit;
//         n = Math.floor(n / 10);
//     }
//     return sum;
// }
// console.log(sumOfDigit(1234));


// COUNT DIGITS 

// function countDigit(n) {
//     let count = 0;
//     while (n > 0) {
//         n = Math.floor(n / 10);
//         count++;
//     }
//     return count;
// }
// console.log(countDigit(12345));

// FACTORIAL
// function factorial(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(5));

// function fibonacci(n) {
//     let a = 0;
//     let b = 1;

//     console.log(a); 
//     if (n > 1) console.log(b); 

//     for (let i = 2; i < n; i++) {
//         let next = a + b;
//         console.log(next);

//         a = b;
//         b = next;
//     }
// }

// fibonacci(10);  

// PRIME 
// function isPrime(n) {
//     if (n < 2) return false;   

//     for (let i = 2; i < n; i++) {   
//         if (n % i === 0) {
//             return false;      
//         }
//     }

//     return true;   
// }
// function printPrimeRange(L, R) {
//     for (let num = L; num <= R; num++) {
//         if (isPrime(num)) {
//             console.log(num);
//         }
//     }
// }


// printPrimeRange(10, 50)




