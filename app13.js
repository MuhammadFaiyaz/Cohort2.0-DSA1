// two sum of array (its not so efficient)

let nums = [2, 7, 11, 15];
let target = 9;
let map = new Map();
for (let i = 0; i < nums.length; i++) {
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] + nums[j] === target) {
      console.log(i, j);
    }
  }
}


// same problem solving using Map now

for (let i = 0; i < nums.length; i++) {
  let complement = target-nums[i]
  if(map.has(complement)) {return [map.get(complement),i]}
  map.set(nums[i],i)
}


// first letters appears twice
let s = "abccbaacz";
let map = new Map();
for (let i = 0; i < s.length; i++) {
  if (map.has(s[i])) return (true);
  map.set(s[i])
}
return false


h 
// sorting the people in descending order
let names = ["Alice", "Bob", "Charlie"];
let heights = [165, 180, 170];
let results = names
  .map((name, i) => [name, heights[i]])
  .sort((a, b) => b[1] - a[1])
  .map((item) => item[0]);
console.log(results);

// sum of unique elems
let nums = [1,2,3,2]
let map = new Map();
nums.forEach(n=> map.set(n, (map.get(n) || 0 ) +1))
let sum = 0;
for (const [key, value] of map) {
    if (value===1) sum+=key
}
console.log(sum)

// finds the frequency of an elements in an integer array
let arr = [1, 2, 2, 3, 1, 4];
let map = new Map();
arr.forEach(n=> map.set(n, (map.get(n)||0)+1))
map.forEach((freq, elem)=> {
    console.log( elem + " "+freq)
})

// return the most fequent even element
let nums = [1, 3, 2, 8, 2, 3, 8];
let map = new Map();
nums.forEach(n=> map.set(n, (map.get(n)||0)+1))
let maxFreq = 0 
let result =-1
for (let [key, value] of map) {
    if (key%2===0) {
        if(value>maxFreq ){
        result = key
        maxFreq= value
    } else if(value===maxFreq){
        result=Math.min( result, key)
    }
    }
}

console.log(result)