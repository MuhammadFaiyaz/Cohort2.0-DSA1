// Each char at new line
let str = "FAIYAZ";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

// Reverse string in a single line
let str2 = "hello";
let reverse = "";
for (let i = str2.length - 1; i >= 0; i--) {
  reverse += str2[i];
}
console.log(reverse);

// Palindromic string in place
let str3 = "malayalam";
let i = 0;
let j = str3.length - 1;
let isPalindrome = true;
while (i < j) {
  if (str3[i] != str3[j]) {
    isPalindrome = false;
    break
  } 
  i++
  j--
}
console.log(
  isPalindrome ? "The text is palindrom" : "The text is not palindrom",
);
