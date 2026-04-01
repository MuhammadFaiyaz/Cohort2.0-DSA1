// find the root of a number
// let prompt = require("prompt-sync")();
// let n = Number(prompt("enter a number "));
// function mySqrt(n) {
//   let first = 1;
//   let last = n;
//   let ans = 0;
//   while (first <= last) {
//     let mid = Math.floor((first+last)/2)
//     if(mid<=n/mid) {
//         ans = mid;
//         first = mid+1;
//     }
//     else last = mid-1
//   }
//   console.log(ans)
// }
// mySqrt(n);

// ------------------------------------------------


// power of n to top

// let x = 2.10000;
// let n = 3;
// let ans = 0;
// let solve = function (x, n) {
//   if (n == 0) return 1;
//   ans = solve(x, Math.floor(n / 2));
//   if (n % 2 == 0) return ans * ans;
//   return ans * ans * x;
// };
// function myPow(x, n) {
//   let result =0
//   if (n == 0) return 1.00000;
//   else if (n < 0) {
//     n = -n;
//     result = 1 / solve(x, n)
//   } else result=solve(x, n)
//   return (result.toFixed(5))
// }
// console.log(myPow(x,n))

// ------------------------------------------------

// find the factors of number

// function findFactors(n, i = 1) {
//   if (i > n) return;
//   if (n % i == 0) process.stdout.write(i + " ");
//   findFactors(n, i + 1);
// }
// findFactors(12);

// ------------------------------------------------

// find the k-th factor of given number
function kthFactor(n, k, i = 1, count = 0) {
  if (i > n) return -1;
  if (n % i == 0) {
    count++;
    if (count == k) console.log(i);
  }
  return kthFactor(n, k, i + 1, count) 
}
kthFactor(12,3) 