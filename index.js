// 1. Loop to print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Function to return the sum of an array
function sumArray(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}
console.log("Sum:", sumArray([1, 2, 3, 4, 5]));

// 3. Function to find the largest number in an array
function findLargest(arr) {
  return Math.max(...arr);
}
console.log("Largest:", findLargest([10, 5, 20, 8]));

// 4. Function to check if number is even or odd
function checkEvenOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log("Check 7:", checkEvenOdd(7));
console.log("Check 10:", checkEvenOdd(10));

// 5. Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log("Reverse:", reverseString("hello"));

// 6. Merge two arrays using spread operator
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log("Merged:", merged);

// 7. Use ES6 filter to return even numbers
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evens);

// 8. Rewrite using template literals
const name = "Alice";
const msg = `Hello ${name}, welcome!`;
console.log(msg);

// 9. Rewrite using arrow function
const greet = (name) => `Hello, ${name}`;
console.log(greet("Bob"));
