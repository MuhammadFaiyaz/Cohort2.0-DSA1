// Calculate the sum and mean of an array
let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: "));
let sum = 0;
let mean = 0;

let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(i);
  sum += i;
}

mean = sum / n;
return [sum, mean];

// Find the greatest elements and its index
let arr = [14, 7, 29, 3, 18, 42, 9, 25];
let max = arr[0];
let index = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
    index = i;
  }
}
return [max, index];

// Find the second greatest elements
arr = [10, 20, 30, 25]
let max = arr[0];
let sMax = -Infinity;
let index = 0;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    sMax = max;
    max = arr[i];
  } else if (arr[i] > sMax && arr[i] < max) sMax = arr[i];
}

return sMax;