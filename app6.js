// copy array and reverse array

let arr = [6, 7, 8, 9];
let reversed = [];
for (let i = arr.length - 1; i >= 0; i--) {
  reversed.push(arr[i]);
}
console.log(reversed);

// array reverse without using extra space
let temp = new Array(arr.length);
let j = arr.length - 1;
for (let i = 0; i < arr.length; i++) {
  temp[i] = arr[j];
  j--;
}
console.log(temp);

// without using extra space
for (let i = 0; i < Math.floor(arr.length / 2); i++) {
  let temp = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = temp;
}
console.log(arr)

//  array left rotation by 1
let temp = arr[0];
for (let i = 1; i < arr.length; i++) {
  arr[i - 1] = arr[i];
}
arr[arr.length - 1] = temp;
console.log(arr);

// move zeroes (0)
let arr2 = [0, 1, 0, 1, 1];

let j = 0;
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] !== 0) {
    [arr2[j], arr2[i]] = [arr2[i], arr2[j]];
    j++;
  }
}
console.log(arr2);

// Sum of absolute difference
let arr3 = [1, 2, 3, 4, 5];
let totalSum = 0n;
let N = arr3.length;
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    let diff = BigInt(arr3[i]) - BigInt(arr3[j]);
    if (diff <= 0) totalSum += -diff;
    else totalSum += diff;
  }
}

console.log(totalSum);

//  Multiplication of  previous and next element
let arr4 = [1, 2, 3, 4, 5];
let n = arr4.length;
let result = new Array(n);

if (n === 1) return [arr4[0] * arr4[0]];
for (let i = 0; i < n; i++) {
  if (i === 0) {
    result[i] = arr4[0] * arr4[1];
  } else if (i === n - 1) {
    result[i] = arr4[n - 1] * arr4[n - 2];
  } else result[i] = arr4[i - 1] * arr4[i + 1];
}
console.log(result)

// Minimum value to add for balanced array (the array's length must be in even size)
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = arr.length;
let half = n / 2;
let leftSum = 0;
let rightSum = 0;
for (let i = 0; i < half; i++) {
  leftSum += arr[i];
}
for (let i = half; i < n; i++) {
  rightSum += arr[i];
}
console.log(Math.abs(leftSum - rightSum));

// Sort first half ascendeing and rest half descending
let arr = [2, 6, 3, 1, 9, 8, 5];
let n = arr.length;
let mid = Math.floor(n/2)

let firstHalf = arr.slice(0,mid)
let restHalf = arr.slice(mid)
firstHalf.sort((a, b) => a-b)
restHalf.sort((a, b) => b-a)
let finalArray = firstHalf.concat(restHalf)
console.log(finalArray)
