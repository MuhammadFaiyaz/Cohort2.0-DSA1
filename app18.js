// find the root of a number
let prompt = require("prompt-sync")();
let n = Number(prompt("enter a number "));
function mySqrt(n) {
  let first = 1;
  let last = n;
  let ans = 0;
  while (first <= last) {
    let mid = Math.floor((first+last)/2)
    if(mid<=n/mid) {
        ans = mid;
        first = mid+1;
    }
    else last = mid-1
  }
  console.log(ans)
}
mySqrt(n);
