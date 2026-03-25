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
let n = 7;
let k = 3;
let candies = [1, 1, 2, 2, 3, 3, 4];

let freq = {};
for (let candy of candies) {
  freq[candy] = (freq[candy] || 0) + 1;
}

let uniqueTypes = Object.keys(freq).length;
if (uniqueTypes < k) return 0;
let maxChildren = Math.floor(n / k);
for (let children = maxChildren; children >= 1; children--) {
  let typesAvailable = 0;
  for (const type in freq) {
    typesAvailable += Math.floor(freq[type] / children);
  }
  if (typesAvailable >= k) {
    return (children);
  }
}


