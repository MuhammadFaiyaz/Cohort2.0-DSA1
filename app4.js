// Right Triangle - Star Pattern
let prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter the number of rows: "));
for (let i = 1; i <=num; i++) {
    for (let j = 1; j <=i; j++) {
        process.stdout.write('* ')
    }
    console.log()
}

// Mirror Right Triangle - Star Pattern
let prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number of rows: "));
for (let i = 1; i <=n; i++) {
    for (let j = 1; j <=n-i; j++) {
        process.stdout.write('  ')
    }
    for (let k = 1; k <=i; k++) {
        process.stdout.write(' *')
    }
    console.log()
}

// V pattern
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i - 1; j++) {
    process.stdout.write(" ");
  }
  process.stdout.write("*");
  for (let k = 1; k <= 2 * (n - i) - 1; k++) {
    process.stdout.write(" ");
  }
  if (i !== n) {
    process.stdout.write("*");
  }
  console.log();
}

// X pattern
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (j === i || j === n - 1 - i) process.stdout.write("*");
    else process.stdout.write(" ");
  }
  console.log();
}
