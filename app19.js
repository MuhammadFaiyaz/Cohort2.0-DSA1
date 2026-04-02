// merge sorted arrays
// let arr1 = [1, 5, 0, 0];
// let m = 2;
// let arr2 = [2, 3];
// let result = arr1.slice(0, m);
// let temp = new Array(result.length + arr2.length);
// let i = 0;
// let j = 0;
// let k = 0;
// while (i < result.length && j < arr2.length) {
//   if (result[i] < arr2[j]) temp[k++] = result[i++];
//   else temp[k++] = arr2[j++];
// }
// while (i < arr2.length) {
//   temp[k++] = result[i++];
// }
// while (j < result.length) {
//   temp[k++] = arr2[j++];
// }
// console.log(temp);

// -------------------------------------------------------------------------------------------------

// Remove duplicates in-place from a sorted array.
let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let i = 0;
let j = 1;
while (i < arr.length - 1) {
  if (arr[i] !== arr[i + 1]) {
    arr[j] = arr[i + 1];
    j++;
  }
  i++;
}
console.log(arr.slice(0,j));
