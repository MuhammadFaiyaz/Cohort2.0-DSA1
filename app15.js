// let array1 = [2, 3, 56, 34];
// let a = 3, n = 4;

// for (let k = 0; k <= n - 1; k++) {
//     array1[n] = array1[0];
//     for (let j = 0; j <= n - 1; j++) {
//         array1[j] = array1[j + 1];
//     }
// }

// for (let k = 0; k <= n - 1; k++) {
//     console.log(array1[k]);
// }

// // --------------------------
// let a = 5;
// let b = 6;
// let c;
// let v = 90;

// while (v > 8) {
//     a = a + v;
//     c = (a + b) % 10;
//     while (c > 9) {
//         b = b - a;
//         c = c - 1;
//     }
//     v = Math.floor(v / 2);
// }
// console.log(b, c);

// ---------------------
function funn(a, b, c) {
  c = b + c;
  b = b + b + b;
  c = (10 + 6) & a;
  c = (4 + 8) & b;
  b = (a + c) & c;

  return a + b + c;
}

//  swap two numbers without using third variable
let a = 5,
  b = 6;
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log(`a = ${a} | b = ${b}`);

//  a number is power of 2
let n = 1;
if (n > 0 && (n & (n - 1)) === 0) console.log(true);
else console.log(false);
