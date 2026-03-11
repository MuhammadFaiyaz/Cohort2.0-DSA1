// Count asterisk
// let s = "yo|uar|e**|b|e***au|tifu|l";
// let count = 0;
// let inside = false;
// for (const astr of s) {
//   if (astr === "|") inside = !inside;
//   else if (astr === "*" && !inside) count++;
// }
// console.log(count);

// Percentage of letter in a string
// let s = "mississippi";
// let letter = "s";
// let count = 0;
// let splittedS = s.split("");
// for (let element of splittedS) {
//   if (element === letter) count++;
// }
// console.log(Math.round((count*100)/s.length))

// Check if all A's appear before all B's
function checkString(s) {
  return !s.includes("ba");
}

// strong password checker
// let password = "Abcdefg1!";
// const specialChars = "!@#$%&*^()-+";
// let hasDigit = false;
// let hasSpecial = false;
// let hasLower = false;
// let hasUpper = false;
// for (let i = 0; i < password.length; i++) {
//   let char = password[i];
//   if (char >= "a" && char <= "z") hasLower = true;
//   if (char >= "A" && char <= "Z") hasUpper = true;
//   if (char >= "0" && char <= "9") hasDigit = true;
//   if (specialChars.includes(char)) hasSpecial = true;
//   if (i > 0 && char === password[i - 1]) return false;
// }
// console.log(hasDigit && hasLower && hasSpecial && hasUpper);

// Greatest english letter in uppercase and lowercase
// let s = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";
// let maxChar = null;
// for (let i = 0; i < s.length; i++) {
//   if (s[i] >= "A" && s[i] <= "z")
//     if (s[i] > maxChar || !maxChar) maxChar = s[i];
// }
// console.log(maxChar.toUpperCase());

// Rearrange character to make  target string
// let s = "zzxxccvvbbnnmmllkkjjiihhggffddssaa";
// let distances = [
//   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
// ];
// for (let i = 0; i < s.length; i++) {
//     let letter = s[i]
//     let secondIndex = s.indexOf(letter, i+1)
//     if(secondIndex !== -1){
//         let gap = secondIndex-i-1
//         let letterIndex  = letter.charCodeAt(0)-97
//         if(gap!==distances[letterIndex]) return false
//     }
// }
// return true

// Largest 3 same digit number in stirng
// let num = 6777133339;
// let maxDigit = -1;
// for (let i = 0; i <= num.length - 3; i++) {
//   if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
//     let currentDigit = num[i];
//     if (currentDigit > maxDigit) {
//       maxDigit = currentDigit;
//     }
//   }
// }
// return maxDigit === -1 ? "": maxDigit.toString().repeat(3)

// remove digit from number to maximize result
// let number = 1231;
// let digit = 1;
// let digits = number.toString();
// let result = "";
// for (let i = 0; i < digits.length; i++) {
//   if (digits[i] == digit) {
//     let temp = digits.slice(0, i) + digits.slice(i + 1);
//     if (temp > result) result = temp;
//   }
// }
// console.log(Number(result));

// CHeck if Number has equal digit count and equal digit value
let num = "1210";
for (let i = 0; i < num.length; i++) {
  let count = 0;
  for (let j = 0; j < num.length; j++) {
    if (num[j] == i) count++;
  }
  if (count != num[i]) console.log(false);
}
console.log(true);

// Find resultant array after removing duplicates array
let words = ["abba", "baba", "bbaa", "cd", "cd"];
let result = [];
for (const word of words) {
  let sorted = word.split("").sort().join("");
  if (result.length === 0) result.push(word);
  else {
    let prev = result[result.length - 1].split("").sort().join("");
    if (sorted !== prev) result.push(word);
  }
}
console.log(result);

//
let s = "00000000";
let k = 3;
while (s.length > k) {
  let newS = "";
  for (let i = 0; i < s.length; i += k) {
    let group = s.slice(i, i + k);
    let sum = 0;
    for (const ch of group) {
      sum += Number(ch);
    }
    newS += sum;
  }
  s=newS
}
console.log(s)
