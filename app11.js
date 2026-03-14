let arr = new Array(2).fill(new Array(2).fill(0));
arr[0][0] = 5;
// console.log(arr);
// Output: [[5, 0], [5, 0]]
// Explanation: The inner arrays are references to the same array, so modifying one modifies all of them.

// Diagonal sum
let mat = [
  [1,1,1,1],
  [1,1,1,1],
  [1,1,1,1],
  [1,1,1,1]
];
let sum = 0;
for (let i = 0; i < mat.length; i++) {
    sum +=mat[i][i];
    sum+=mat[i][mat.length-1-i]   
}
if(mat.length%2!==0) sum-=mat[Math.floor(mat.length/2)][Math.floor(mat.length/2)]
console.log(sum);

