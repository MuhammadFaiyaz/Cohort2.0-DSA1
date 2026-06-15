require("prompt-sync")();

// let height = [100, 200, 50, 400, 150];
// let maxWater = 0;

// let left = 0;
// let right = height.length - 1;

// while (left < right) {
//   let distance = right - left;
//   if (height[left] < height[right]) {
//     if (distance * height[left] > maxWater) {
//       maxWater = distance * height[left];
//     }
//   } else {
//     if (distance * height[right] > maxWater)
//       maxWater = distance * height[right];
//   }
//   if (height[left] < height[right]) left++;
//   else right--;
// }
// console.log(maxWater);

// -------------------------------------------------------

let nums = [-1, 0, 1, 2, -1, -4];
nums.sort((a, b) => a - b);

