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
  for (let j = i+1; j < rows; j++) {
    let temp = matrix[i][j];
    matrix[i][j] = matrix[j][i];
    matrix[j][i] = temp;
  }
}
for(let i = 0; i < matrix.length; i++){
    matrix[i].reverse()
}
console.log(matrix);