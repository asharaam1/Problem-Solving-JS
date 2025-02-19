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