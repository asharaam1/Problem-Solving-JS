//! Problems of the Month
let problem = document.querySelector('.problem');
let head = document.querySelector('.head');
let solution = document.querySelector('.text');

//! Pr # 01
// problem.innerHTML = 'Shuffle Array: Create a function shuffleArray that takes an array as input and returns a new array with its elements shuffled randomly.';
// head.innerHTML = 'Shuffle Array';

// function shuffleArray() {
//     let arr = [52, 85, 90, 'asha', 'ali', 'king'];

//     // Fisher-Yates Algorithm for shuffling
//     for (let i = arr.length - 1; i > 0; i--) {
//         let random = Math.floor(Math.random() * (i + 1));
//         [arr[i], arr[random]] = [arr[random], arr[i]]; // Swap elements
//     }

//     return arr;
// }

// let ans = shuffleArray();
// console.log(ans);

// solution.innerHTML = JSON.stringify(ans);




//! Pr # 02
// problem.innerHTML =  "An array is considered special if every pair of its adjacent elements contains two numbers with different parity. You are given an array of integers nums. Return true if nums is a special array, otherwise, return false. "
// var isArraySpecial = function (nums) {
//     for (let i = 0; i < nums.length - 1; i++) {
//         if ((nums[i] % 2) === (nums[i + 1] % 2)) {
//             console.log(false);
//             return false;

//         }
//     }
//     console.log(true);
//     return true;

// };

// let ans = isArraySpecial([4, 3, 1, 6])
// solution.innerHTML = `Array:[4, 3, 1, 6] Ans:${ans}`




//! Pr # 03
// problem.innerHTML = "Find the final Value of Variable After Performing Operations <br/> <br/>You are given an array of strings operations where each element is an operation of either incrementing or decrementing a variable X. You need to return the final value of X after performing all the operations. <br/> X++ or ++X: Increment the variable X by 1. <br/> X-- or --X: Decrement the variable X by 1."
// const finalValueAfterOperations = (operations) => {
//   let result = 0;

//   for (let i = 0; i < operations.length; i++) {
//     if (operations[i] === "X++") {
//       result++;
//     } else if (operations[i] === "--X") {
//       result--;
//     } else if (operations[i] === "++X") {
//       result++;
//     } else if (operations[i] === "X--") {
//       result--;
//     }
//   }

//   return result;
// };

// finalValueAfterOperations(["X++"]);
// console.log(finalValueAfterOperations(["X"]));
// let ans = finalValueAfterOperations(["X++"])
// solution.innerHTML = `finalValueAfterOperations(["X++"])  <br/>Ans:${ans}`



//! Pr # 04
// problem.innerHTML = `A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers. Given a string s, return true if it is a palindrome, or false otherwise. <br/> link: <a href="https://leetcode.com/problems/valid-palindrome/description/?form=MG0AV3">https://leetcode.com/problems/valid-palindrome/description/?form=MG0AV3</a>`
// function isPalindrome1(s) {
//     s = s.toLowerCase();
//     s = s.replaceAll(/[^a-z0-9]/g, ""); // regex

//     let reverseString = s.split("").reverse().join("");
//     let result = s === reverseString;
//     console.log(reverseString);

//     return result;
// }

// function isPalindrome2(s) {
//     s = s.toLowerCase();
//     s = s.replaceAll(/[^a-z0-9]/g, "");

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] !== s[s.length - i - 1]) {
//             return false;
//         }
//     }

//     return true;
// }
// let s = "sA man, a plan, a canal: Panama"; // false
// // let s = "A man, a plan, a canal: Panama" // true
// // let s = "shehzad";  //false
// // let s = "level"  //true
// // let s = "civic" //true
// // let s = "mah)(*&^%$#@!am";  //true buz remove all non-alphanumeric characters using the regex

// console.log(isPalindrome1(s));
// let ans = isPalindrome1(s)
// solution.innerHTML = `"sA man, a plan, a canal: Panama"  <br/>Ans:${ans}`



//! Pr # 05
// problem.innerHTML = `Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct. <br/>  link: <a href="https://leetcode.com/problems/contains-duplicate/description/">https://leetcode.com/problems/contains-duplicate/description/</a>`
// function containsDuplicate(nums) {
//     nums.sort(); // this is for aligning same number together

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === nums[i + 1]) {  //here i+1 will check the next element in the loop buz lenghth is used
//             return true;
//         }
//     }
//     return false;
// }

// console.log(containsDuplicate([2, 3, 1, 3]));  // true
// console.log(containsDuplicate([2, 1, 3]));  //false
// console.log(containsDuplicate(["shehzad", "", "shehzad"])); //true
// console.log(containsDuplicate(["a", "b", "c"]));  //false



//! Pr # 06
// problem.innerHTML = `Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.  <br/>  link: <a href="https://leetcode.com/problems/add-digits/">https://leetcode.com/problems/add-digits/</a>`

// const addDigit = (num) => {
//     let arrayOfNumber = String(num).split("");

//     let sum = 0;

//     for (let i = 0; i < arrayOfNumber.length; i++) {
//         sum += Number(arrayOfNumber[i]);
//     }

//     if (sum > 9) {
//         let result = addDigit(sum);
//         return result;
//     }

//     return sum;
// };

// console.log(addDigit(4211)); // 8
// console.log(addDigit(83)); // 2
// console.log(addDigit("3567887654")); // 5

// let ans = addDigit(38)
// solution.innerHTML = `Input = 38  <br/>Result: ${ans}`



//! Pr # 07
// problem.innerHTML = `You are given a 0-indexed array of strings words and a character x.
// <br/>
// Return an array of indices representing the words that contain the character x.
// <br/>
// Note that the returned array may be in any order.  <br/>  link: <a href="https://leetcode.com/problems/find-words-containing-character/description/">https://leetcode.com/problems/find-words-containing-character/description/</a>`

// function findWordsContaining(words, x) {
//     let result = [];
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].includes(x)) {
//             result.push(i);
//         }
//     }
//     return result;
// }

// // let words = ["leet", "code"], x = "e";// [0,1]
// // let words = ["abc", "bcd", "aaaa", "cbc"], x = "z"; // []
// let words = ["abc", "bcd", "aaaa", "cbc"], x = "a";

// console.log(findWordsContaining(words, x));

// let ans = findWordsContaining(words, x);
// solution.innerHTML = `words = ["abc", "bcd", "aaaa", "cbc"], x = "a" <br/>Result: index ${ans}`



//! Pr # 08
// problem.innerHTML = `Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
// <br/>
// The fn function takes one or two arguments:
// <br/>
// <ul>
//     <li>arr[i] - number from the arr</li>
//     <li>i - index of arr[i]</li>
// </ul>
// <br/>  
// link: <a href="https://leetcode.com/problems/filter-elements-from-array/description/">https://leetcode.com/problems/filter-elements-from-array/description/</a>`

// var filter = function (arr, fn) {
//     const FilterArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (fn(arr[i], i)) {
//             FilterArr.push(arr[i]);
//         }
//     }
//     return FilterArr;
// };

// const arr = [2, 8, 9, 4, 7, 3]
// const fn = (value, index) => value % 2 === 0;
// let ans = filter(arr, fn);
// console.log(ans);
// solution.innerHTML = `Array = [2, 8, 9, 4, 7, 3],<br/>Result:  Filter of Even Numbers ${ans}`



//! Pr # 09
// problem.innerHTML = `ROMAN TO INTERGER <br/>
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M
// <br/>  
// link: <a href="https://leetcode.com/problems/roman-to-integer/description/">https://leetcode.com/problems/roman-to-integer/description/</a>`

// var romanToInt = function (roman) {

//     const romanNumerals = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000
//     };

//     let total = 0;
//     for (let i = 0; i < roman.length; i++) {
//         const current = romanNumerals[roman[i]];
//         const next = romanNumerals[roman[i + 1]];

//         if (next > current) {
//             total += next - current; // If the next numeral is larger, subtract current from next
//             i++; // Skip the next numeral as it's already processed
//         } else {
//             total += current; // Otherwise, just add the current numeral
//         }
//     }

//     return total;
// }

// console.log(romanToInt("MCMXCIV")); // Output: 1994

// let ans = romanToInt("XIV")   // Output: 14
// console.log(ans);
// solution.innerHTML = `Input = XIV ,<br/>Result: Integer: ${ans}`
