// Toggle alphabet case
let string = "wnAkAhbIoPPn";
let res = "";

for (let i = 0; i < string.length; i++) {
  if (string[i] === string[i].toUpperCase()) res += string[i].toLowerCase();
  else res += string[i].toUpperCase();
}
console.log(res)

//  Count string with given perfix
let words = ["java", "javascript", "python", "javadoc", "c"];
let pref = "java";
let count = 0;
for (let word of words) {
  if (word.startsWith(pref)) {
    count++;
  }
}
console.log(count)

// Capitalize the first and last letter of each word
let str = "Hello bhai kaise h";
let Words = str.split(" ");
let result = [];
for (let word of Words) {
  if (word.length === 1) result.push(word.toUpperCase());
  else {
    let first = word[0].toUpperCase();
    let mid = word.slice(1, word.length - 1);
    let last = word[word.length - 1].toUpperCase();
    result.push(first + mid + last);
  }
}
let finalStr = result.join(" ");
console.log(finalStr);

// Character frequency in string
let Str = "kabhi khushi kabhi gam";
let arr = new Array(128).fill(0);
let result = [];
for (let i = 0; i < Str.length; i++) {
  let ascii = Str.charCodeAt(i);
  if (Str[i] !== " ") arr[ascii] = arr[ascii] + 1;
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    let char = String.fromCharCode(i);
    console.log(char + ": " + arr[i]);
  }
}

// Check if two strings are anagrams
let s1 = "listen";
let s2 = "silent";

if (s1.length !== s2.length) console.log(false);
else {
  let arr = s1.split("").sort().join("");
  let arr2 = s2.split("").sort().join("");

  if (arr === arr2) console.log(true);
  else console.log(false);
}

Maximum number of words in a sentence
let sentences = [
  "coding is fun",
  "practice makes perfect",
  "consistency is the key to success",
];
let Words = Math.max(...sentences.map((a) => a.split(" ").length));
console.log(Words);

// Sort the words in a sentences
let s = "sorting words in a sentence";
let S = "taj mahal is situated at Agra";
let newSen = S.split(' ')
newSen.sort()
console.log(newSen.join(' '))