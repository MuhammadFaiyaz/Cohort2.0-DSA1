// decode the message
// let mapping = ["a b", "b c", "c d", "d e", "e f"];
// let message = "abc de";
// let map = new Map();
// for (const pair of mapping) {
//   let original = pair[0];
//   let decoded = pair[2];
//   map.set(original, decoded);
// }
// let result = "";
// for (const char of message) {
//   if (map.has(char)) result += map.get(char);
//   else result += char;
// }
// console.log(result);

// Distribute candies
// let n = 7;
// let k = 3;
// let candies = [1, 1, 2, 2, 3, 3, 4];

// let freq = {};
// for (let candy of candies) {
//   freq[candy] = (freq[candy] || 0) + 1;
// }

// let uniqueTypes = Object.keys(freq).length;
// if (uniqueTypes < k) return 0;
// let maxChildren = Math.floor(n / k);
// for (let children = maxChildren; children >= 1; children--) {
//   let typesAvailable = 0;
//   for (const type in freq) {
//     typesAvailable += Math.floor(freq[type] / children);
//   }
//   if (typesAvailable >= k) {
//     return (children);
//   }
// }

// kth distinct string in array
// let arr = ["a", "b", "c", "d", "a", "b", "e"];
// let k = 2;
// let freq = {};
// for (const elem of arr) {
//   freq[elem] = (freq[elem] || 0) + 1;
// }
// let distinct = [];
// for (const elem of arr) {
//   if(freq[elem]===1)  distinct.push(elem)
// }
// if(distinct.length>=k) console.log(distinct[k-1])
// else console.log('None')

//  pattern word
let pattern = "abba";
let s = "dog cat cat dog";
let words = s.split(" ");
if (pattern.length !== words.length) console.log(false);

let map1 = {};
let map2 = {};
for (let i = 0; i < words.length; i++) {
  let p = pattern[i];
  let w = words[i];
  if (map1[p] && map1[p] !== w) return false;
  if (map2[w] && map2[w] !== p) return false;

  map1[p] = w;
  map2[w] = p;
}
// return true

// set mismatch
let nums = [2, 2];
let freq = {};

for (let num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }
let duplicate = -1;
let missing = -1;
for (let i = 1; i <= nums.length; i++) {
  if(freq[i]===2) duplicate = i;
  if(!freq[i]) missing = i
}
console.log(duplicate, missing)