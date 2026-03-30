// GCD of two numbers euclidean algorithm
let prompt = require("prompt-sync")();
// let a = Number(prompt("enter a number "));
// let b = Number(prompt("enter a number "));
// function gcd(a, b) {
//   if (a == b) return a;
//   if (a > b) return gcd(a - b, b);
//   return gcd(a, b - a);
// }
// console.log(gcd(a, b));

// find the cgd on an array
// let arr = [20, 15, 21, 30];
// function findArrayGCD(arr) {
//   let min = Math.min(...arr);
//   let max = Math.max(...arr);
//   function gcd(min, max) {
//     if (max === 0) return min;
//     return gcd(max, min % max);
//   }
//   console.log(gcd(min, max));
// }
// findArrayGCD(arr);

// count prime numbers

let n = Number(prompt("enter a number "));
let count = 0;
let prime = new Array(n + 1).fill(true);
for (let i = 2; i <= Math.sqrt(n); i++) {
  if (prime[i]) {
    for (let j = i * i; j <= n; j += i) {
      prime[j] = false;
    }
  }
}
for (let i = 2; i < n; i++) {
  if (prime[i]) count++
}
console.log(count)