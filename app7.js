// Linear search in an array
let prompt = require("prompt-sync")();
// let arr = [5, 3, 8, 1, 2];
// let target = Number(prompt("enter a number "));
// let index = -1;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === target) {
//     index=i
//     break;
//   }
// }
// if (index !==-1) console.log("Found at index " + index);
// else console.log(-1);

//bubble sort
let arr = [3, 2, 9, 10, 5, 6, 7, 3, 4];
let n = arr.length;
// for (let i = 0; i < n - 1; i++) {
//   for (let j = 0; j < n - 1 - i; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }

// insertion sort
for (let i = 0; i < n - 1; i++) {
  let min = i;
  for (let j = i + 1; j < n; j++) {
    if (arr[j] < arr[min]) min = j;
  }
  if (min !== i) {
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
}
