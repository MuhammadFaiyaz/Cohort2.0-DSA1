// check the only one unique value in the set
let arr = [1, 1, 1, 1, 1,3,4,5,6,7,8,1,34,4,6,7,8,9];
let set2 = new Set(arr);
console.log(set2);

//jewels and stones
let jewels = "aA";
let stones = "aAAbbbb";
let set = new Set();
let count = 0;
for (let i = 0; i < jewels.length; i++) {
  let ch = jewels.charAt(i);
  set.add(ch);
}
for (let i = 0; i < stones.length; i++) {
  if (set.has(stones[i])) {
    count++;
  }
}
console.log(count);

// check if a sentence is a pangram or not
let sentence = "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz";
let newSet = new Set(sentence);
for (const ch of newSet) {
  let ascii = ch.charCodeAt(0);
  if (ascii >= 97 && ascii <= 122) count++;
}
if (count === 26) console.log(true);
else console.log(false);

// happy num
let n = 20;
let seen = new Set();
while (n !== 1 && !seen.has(n)) {
  seen.add(n);
  let sum = 0;
  let temp = n;
  while (temp > 0) {
    let digit = temp % 10;
    sum += digit * digit;
    temp = Math.floor(temp / 10);
  }
  n = sum;
}

console.log(n === 1);
