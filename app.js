//********** */ Write a program to find the largest number between two given numbers.
let prompt = require("prompt-sync")();
let num1 = Number(prompt("Enter the first num "));
let num2 = Number(prompt("Enter the second num "));

if (num1 > num2) console.log(num1);
else console.log(num2);

//************** */ Write a program to check whether a given number is even or odd.
let number = Number(prompt("Enter the num "));
if (number % 2 === 0) console.log("even number");
else console.log("odd number");

// Write a program to check whether a user is a valid voter or not (consider the minimum voting age as 18 years).
let age = Number(prompt("enter your age "));
if (age >= 18) console.log("a valid voter");
else console.log("a non valid voter");

//******** */ Write a program to check whether a given year is a leap year or not.
let year = Number(prompt("enter a year "));
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
  console.log("leap year");
else console.log("not a leap year");

// ***************Accept three numbers and check the largest number among them.
let Num1 = Number(prompt("Enter the first number "));
let Num2 = Number(prompt("Enter the second number "));
let Num3 = Number(prompt("Enter the third number "));
if (Num1 > Num2 && Num1 > Num3) console.log(`the largest num is ${Num1}`);
else if (Num2 > Num1 && Num2 > Num3) console.log(`the largest num is ${Num2}`);
else console.log(`the largest num is ${Num3}`);

// Write a program to calculate the final amount after applying a shop discount on a product. (1-5000--0%, 5001-7000--5%, 7001-9000--10%, above than 9000--20%)
let amount = Number(prompt("enter the amount "));
if (amount > 0 && amount < 5001) dis = 0;
else if (amount > 5000 && amount < 7001) dis = 5;
else if (amount > 7000 && amount < 9001) dis = 10;
else dis = 20;
console.log(`payble amount: ${amount - (amount * dis) / 100}`);

// Write a program to calculate the electricity bill for a customer based on the number of units consumed.

// The rules are:
// For the first 1–100 units, the rate is 4.2 taka per unit.
// For the next 101–200 units, the rate is 6 taka per unit.
// For the next 201–400 units, the rate is 8 taka per unit.
// If the units consumed are more than 400, the rate is 11 taka per unit.
let unit = Number(prompt("enter the unit: "));
if (unit > 0 && unit <= 100) console.log(`Total amount: ${unit * 4.2} taka`);
else if (unit > 100 && unit <= 200)
  console.log(`Total amount: ${100 * 4.2 + (unit - 100) * 6} taka`);
else if (unit > 200 && unit <= 400)
  console.log(`Total amount: ${100 * 4.2 + 100 * 6 + (unit - 200) * 8} taka`);
else if (unit > 400)
  console.log(
    `Total amount: ${100 * 4.2 + 100 * 6 + 200 * 8 + (unit - 400) * 11} taka`,
  );
else console.log("Enter a valid unit");

// Write a program that asks the user to enter: Month number (1 for January, 2 for February, …, 12 for December) and Year. The program should then display how many days are in that month for the given year.
let month = Number(prompt("enter the number of month: "));
let year = Number(prompt("enter the number of year: "));
let days = 0;
let monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
if (month === 2) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) days = 29;
  else days = 28;
} else if (
  month === 1 ||
  month === 3 ||
  month === 5 ||
  month === 7 ||
  month === 8 ||
  month === 10 ||
  month === 12
) {
  days = 31;
} else {
  days = 30;
}
console.log(`${monthNames[month - 1]}--${year} has ${days} days`);
