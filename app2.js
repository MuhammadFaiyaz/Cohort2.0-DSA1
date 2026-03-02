// Write a program that accepts three integers as input and displays the largest among them. If two or all three numbers are equal and they are the largest, the program should print that number.
function findGreatest(a, b, c) {
  // Write your logic here
  if (a >= b && a >= c) return a;
  else if (b >= c && b >= a) return b;
  else return c;
}
findGreatest(2, 2, 2); // Output: 30

// Write a program that accepts a number from 1 to 7 as input and displays the name of the corresponding day of the week. The mapping should be:
// 1 for Monday, 2 for Tuesday, 3 for Wednesday, 4 for Thursday, 5 for Friday, 6 for Saturday, and 7 for Sunday. If the input is not within the range of 1 to 7, the program should display "Invalid day number".
let day = 6;
switch (day) {
  case 1:
    return "Monday";
  case 2:
    return "Tuesday";
  case 3:
    return "Wednesday";
  case 4:
    return "Thursday";
  case 5:
    return "Friday";
  case 6:
    return "Saturday";
  case 7:
    return "Sunday";
  default:
    return "Invalid day number";
}
