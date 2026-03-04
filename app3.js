// logic of reverse number
// let prompt = require("prompt-sync")();
// let num = Number(prompt("Enter a number "));
// let reverse = 0;
// let original = num;

// while (num > 0) {
//   let digit = num % 10;
//   reverse = reverse*10 + digit
//   num = Math.floor(num / 10);
// }
// console.log(reverse);

//  harshhad num
// let prompt = require("prompt-sync")();
// let nStr = Number(prompt("Enter a number "));
// let origin = nStr;
// let sum = 0;
// while (nStr > 0) {
//   let dig = nStr % 10;
//   sum = sum + dig;
//   nStr = Math.floor(nStr / 10);
// }
// if (origin % sum === 0) {
//   return "Harshad Number";
// }

// abundant number
// let prompt = require("prompt-sync")();
// let nStr = Number(prompt("Enter a number "));
// let sum = 0;
// for (let i = 1; i <= nStr / 2; i++) {
//   if (nStr % i === 0) {
//     sum += i;
//   }
// }
// if (sum > nStr) console.log("Yes");
// else console.log("No");

//  logic of getting prime factors
// let prompt = require("prompt-sync")();
// let nStr = Number(prompt("Enter a number "));

// if (nStr<=1) {
//   console.log("No prime factors");
// } else {

//   let i = 2;
//   while (i * i <= nStr) {
//     while (nStr % i === 0) {
//       nStr = nStr / i;
//       if (nStr > 1) console.log(i);
//     }
//     i++;
//   }
//   if (nStr>1) console.log(nStr)
// }

// neon number

let prompt = require("prompt-sync")();
let nStr = Number(prompt("Enter a number "));

// let square = nStr * nStr;
// let sum = 0;
// while (square > 0) {
//   sum += square % 10;

//   square = Math.floor(square / 10);
// }
// if (sum === nStr) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// armstrong number
let original = nStr;
let sum = 0;
while (nStr > 0) {
  let digit = nStr % 10;
  sum += Math.pow(digit, 3);
  nStr = Math.floor(nStr / 10);
}
if (original === sum) console.log("Armstrong");
else console.log("Not Armstrong");
