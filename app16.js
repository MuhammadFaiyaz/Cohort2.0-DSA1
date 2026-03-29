// print hello using recursion
let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number "));
// printHello(n);
// function printHello(n) {
//   if (n == 0) return;
//   console.log("hello");
//   printHello(n - 1);
// }

// print natural numbers 1 to n
// printNumbers(n);
// function printNumbers(n) {
//   if (n == 0) return;
//   printNumbers(n - 1);
//   console.log(n);
// }

// print natural numbers n to 1
// printNumbers(n);
// function printNumbers(n) {
//   if (n == 0) return;
//   console.log(n);
//   printNumbers(n - 1);
// }

// sum up to N terms
// sumUpToN(n);
// function sumUpToN(n) {
//   if (n == 0) return 0;
//   return (n + sumUpToN(n - 1));
// }

// factorial of a number
// console.log(factorial(n))
// function factorial(n) {
//   if (n==0) return 1;
//   return (n)*factorial(n-1)
// }

//  print Fibonacci series
// let first = 0;
// let second = 1;
// process.stdout.write(first + " " + second + " ");
// printFibonacci(n-2, first,second)
// function printFibonacci(n, first, second) {
//   if (n == 0) return;
//   let third = first + second;
//   process.stdout.write(third + " ");
//   printFibonacci(n - 1, second, third);
// }

// sum of digits
// function sumOfDigits(n) {
//   if (n == 0) return 0;
//   return (n%10)+ sumOfDigits(Math.floor(n/10))
// }
// console.log(sumOfDigits(n))

// reverse of Digits
function reverseDigits(n, rev = 0) {
  let sign = n < 0 ? -1 : 1;
  n = Math.abs(n);
  if (n == 0) return rev;
  rev = rev * 10 + (n % 10);
  return sign* (reverseDigits(Math.floor(n / 10), rev));
}
console.log(reverseDigits(n));
