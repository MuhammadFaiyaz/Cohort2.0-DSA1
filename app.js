/*let i = 10;
while (i % 3 !== 0) {
    console.log(i);
    i--;
}*/

// process og getting a strong number

function isStrongNumber(n) {
  let originalNumber = n;
  let sum = 0;
  let temp = n;

  while (temp > 0) {
    let digit = temp % 10;
    let factorial = 1;
    for (let i = 1; i <= digit; i++) {
      factorial *= i;
    }

    sum += factorial;
    temp = Math.floor(temp / 10);
  }

  if (sum === originalNumber) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
isStrongNumber(50);

// logic of printing of the sum of digits
let sum = 0;
let n = 5;
while (n > 0) {
  sum += n % 10;
  n = Math.floor(n / 10);
}
console.log(sum);

// Automorphic Number

let square = n * n;
let lastDigit = square % Math.pow(10, n.toString().length);
if (lastDigit === n) console.log("Yes");
else console.log("No");
