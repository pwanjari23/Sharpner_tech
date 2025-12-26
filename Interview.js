// function twoSum(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// }

// console.log(twoSum([2, 7, 11, 8], 9));

// function reverseArr(arr) {
//     let reversed = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversed.push(arr[i]);
//     }
//     return reversed;
// }
// console.log(reverseArr([1, 2, 3, 4]));

// function reverseStr(str) {
//     let reversed = "";
//     let chars = str.split("");
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += chars[i];
//     }
//     return reversed;
// }

// console.log(reverseStr("hello"));

// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }
// console.log(factorial(5));

// function printNum(n) {
//     if (n === 0) return 0;

//     printNum(n - 1);
//     console.log(n);
// }
// printNum(5);

// function print(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }
// print(10);

// function sumOfNumber(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(sumOfNumber([1, 2, 3, 4, 5]));

// function removeDuplicates(arr) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         let found = false;

//         for (let j = 0; j < result.length; j++) {
//             if (arr[i] === result[j]) {
//                 found = true;
//                 break;
//             }
//         }

//         if (!found) {
//             result.push(arr[i]);
//         }
//     }

//     return result;
// }
// console.log(removeDuplicates([1, 2, 3, 3, 4, 5, 6, 6]));

// function rev(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }
// console.log(rev("hello"));

// function palindrome(str) {
//     let palindromed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         palindromed += str[i];
//     }
//     return palindromed === str;
// }
// console.log(palindrome("madam"));

// function countVowels(str) {
//     let count = 0;
//     let vowels = "aeiouAEIOU";
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("aeiou"));

// function charfreq(str) {
//     let freq = {};
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (freq[char]) {
//             freq[char]++;
//         } else {
//             freq[char] = 1;
//         }
//     }
//     return freq;
// }
// console.log(charfreq("hiieep"))

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

function printList(head) {
    let current = head;
    while (current !== null) {
        console.log(current.data);
        current = current.next;
    }
}
let head = new Node(10);
let second = new Node(20);
let third = new Node(30);

head.next = second;
second.next = third;

printList(head);

function reverseListAndPrint(head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // Print reversed list
  let temp = prev;
  while (temp !== null) {
    console.log(temp.data);
    temp = temp.next;
  }

  return prev; // optional, if you want new head
}
