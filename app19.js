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
// let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// let i = 0;
// let j = 1;
// while (i < arr.length - 1) {
//   if (arr[i] !== arr[i + 1]) {
//     arr[j] = arr[i + 1];
//     j++;
//   }
//   i++;
// }
// console.log(arr.slice(0,j));

// ---------------------------------------------------------------------------------

// Duplicate each occurrence of zero in the array in-place.
// let arr = [1,0,2,3,0,4,5,0]
// let res = []
// for (let i = 0; i < arr.length; i++) {
//   res.push(arr[i])
//   if(arr[i]===0) {res.push(0)}

// }
// for (let i = 0; i < arr.length; i++) {
//   arr[i]=res[i]
// }
// console.log(arr)

//  move zeroes at the most right of the array
// let arr = [0, 1, 0, 1, 1];
// let res =[]
// for (let i = 0; i < arr.length; i++) {
//   res.push(arr[i])

// }
// console.log(res.sort((a, b) => b-a))

// ----------------------------------------------------------------------------

// Find the maximum sum of a contiguous subarray using Kadane's Algorithm.
// let arr = [1000, -1000, 2000, -500, 500, 100]
// let currentSum = arr[0]
// let maxSum = arr[0]
// for (let i = 1; i < arr.length; i++) {
//     currentSum  = Math.max(arr[i], currentSum+arr[i])
//     maxSum=Math.max(currentSum, maxSum);
// }
// console.log(maxSum)

// ----------------------------------------------------------------------------

// Find the majority element using Boyer-Moore Voting Algorithm.
// let nums = [5, 5, 5, 2, 3, 5, 5, 1, 40];
// let candidate = null;
// let count = 0;
// for (let i = 0; i < nums.length; i++) {
//   if (count === 0) candidate = nums[i];
//   if (nums[i] === candidate) count++;
//   else count--;
// }
// console.log( candidate)

// ----------------------------------------------------------------------------

// Find the maximum profit by buying and selling stock.
// let prices = [1, 2, 3, 4, 5];
// let minPrice = Infinity;
// let maxPrice = 0;
// for (let i = 0; i < prices.length; i++) {
//   if (prices[i] < minPrice) minPrice = prices[i];
//   else if (prices[i] - minPrice > maxPrice) maxPrice = prices[i] - minPrice;
// }
// console.log(maxPrice)

// ----------------------------------------------------------------------------

// Sort the colors in the array in-place.
let nums = [2, 1, 2, 0, 1, 0];
// for (let i = 0; i < nums.length; i++) {
//   for (let j = 0; j < nums.length - 1; j++) {
//     if (nums[j] > nums[j + 1]) {
//       let temp = nums[j];
//       nums[j] = nums[j + 1];
//       nums[j + 1] = temp;
//     }
//   }
// }
// console.log(nums)

// DNF method
let i = 0;
let j = 0;
let k = nums.length-1;
while (i <= k) {
  if (nums[i] === 0) {
    [nums[i],nums[j]]=[nums[j],nums[i]]
    j++;
    i++;
  }else if (nums[i]===1) {
    i++;    
  }
  else {
    [nums[i],nums[k]]=[nums[k],nums[i]];
    k--;
  }
}
console.log(nums)