// let arr = new Array(2).fill(new Array(2).fill(0));
// arr[0][0] = 5;
// console.log(arr);
// Output: [[5, 0], [5, 0]]
// Explanation: The inner arrays are references to the same array, so modifying one modifies all of them.

// // Diagonal sum
// let mat = [
//   [1, 1, 1, 1],
//   [1, 1, 1, 1],
//   [1, 1, 1, 1],
//   [1, 1, 1, 1],
// ];
// let sum = 0;
// for (let i = 0; i < mat.length; i++) {
//   sum += mat[i][i];
//   sum += mat[i][mat.length - 1 - i];
// }
// if (mat.length % 2 !== 0)
//   sum -= mat[Math.floor(mat.length / 2)][Math.floor(mat.length / 2)];
// console.log(sum);

// transpose Matrix
// let matrix = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// let arr = [];
// let cols = matrix[0].length;
// let rows = matrix.length;
// for (let i = 0; i < cols; i++) {
//   arr[i]=[]
//   for (let j = 0; j < rows; j++) {
//     arr[i][j]=matrix[j][i]
//   }
// }
// console.log(arr)

// rotate image
let matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
let rows = matrix.length;
for (let i = 0; i < rows; i++) {
  for (let j = i + 1; j < rows; j++) {
    let temp = matrix[i][j];
    matrix[i][j] = matrix[j][i];
    matrix[j][i] = temp;
  }
}
for (let i = 0; i < matrix.length; i++) {
  matrix[i].reverse();
}
console.log(matrix);

// set matrix zeroes
let matrix2 = [
  [1, 2, 3],
  [4, 0, 6],
  [7, 8, 9],
];
let firstColZero = false;
for (let i = 0; i < matrix2.length; i++) {
  if (matrix2[i][0] === 0) {
    firstColZero = true;
  }
  for (let j = 1; j < matrix2[0].length; j++) {
    if (matrix2[i][j] === 0) {
      matrix2[i][0] = 0;
      matrix2[0][j] = 0;
    }
  }
}
for (let i = 1; i < matrix2.length; i++) {
  for (let j = 1; j < matrix2[0].length; j++) {
    if (matrix2[i][0] === 0 || matrix2[0][j] === 0) {
      matrix2[i][j] = 0;
    }
  }
}
if (matrix2[0][0] === 0) {
  for (let i = 0; i < matrix2[0].length; i++) {
    matrix2[0][i] = 0;
  }
}
if (firstColZero) {
  for (let i = 0; i < matrix2.length; i++) {
    matrix2[i][0] = 0;
  }
}

console.log(matrix2);

let arr = [[10, 20], [30, 40]];
arr[0][1] = arr[1][0];
console.log(arr[0][1]);

const mySet = new Set();
mySet.add(1);
mySet.add(1);
console.log(mySet.size);

const set = new Set([1, 2, 3]);
set.clear();
console.log(set.size);
