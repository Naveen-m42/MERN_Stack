/* =====================================================
   SECTION 1 — VARIABLES & ASSIGNMENT
===================================================== */

// 1 & 2. Declare variables and print them
let myName = "John Doe";        // string
let myAge = 21;                 // number
let isStudent = true;           // boolean

console.log("Name:", myName);
console.log("Age:", myAge);
console.log("Is Student:", isStudent);


// 3. Swap two numbers without third variable
let a = 5;
let b = 10;

console.log("Before Swap:", a, b);

a = a + b;
b = a - b;
a = a - b;

console.log("After Swap:", a, b);


// 4. What will be printed and why?
let x = 10;
let y = x;
y = 20;
console.log("Value of x:", x);
// Output: 10
// Because y is assigned a copy of x's value, not a reference.


// 5. Rewrite using const where appropriate
const pi = 3.14;
const radius = 5;
const area = pi * radius * radius;
console.log("Area of Circle:", area);



/* =====================================================
   SECTION 2 — OPERATORS
===================================================== */

// 6. Arithmetic operations
let num1 = 20;
let num2 = 6;

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
console.log("Remainder:", num1 % num2);


// 7. Predict the output
console.log(5 + "5");     // "55" (string concatenation)
console.log(5 - "2");     // 3 (string converted to number)
console.log(true + 1);    // 2 (true = 1)


// 8. Compare number with 100
let checkNumber = 120;

if (checkNumber > 100) {
    console.log("Greater than 100");
} else if (checkNumber === 100) {
    console.log("Equal to 100");
} else {
    console.log("Less than 100");
}


// 9. Difference between == and ===
console.log(5 == "5");   // true (only value compared)
console.log(5 === "5");  // false (value + type compared)


// 10. Logical operators (age eligibility)
let age = 25;

if (age >= 18 && age <= 60) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}



/* =====================================================
   SECTION 3 — CONTROL STATEMENTS
===================================================== */

// 11. Even or Odd
let number = 7;

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}


// 12. FizzBuzz
let fizzNum = 15;

if (fizzNum % 3 === 0 && fizzNum % 5 === 0) {
    console.log("FizzBuzz");
} else if (fizzNum % 3 === 0) {
    console.log("Fizz");
} else if (fizzNum % 5 === 0) {
    console.log("Buzz");
} else {
    console.log("Not divisible by 3 or 5");
}


// 13. Switch weekday
let day = 3;

switch (day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Invalid Day");
}


// 14. For loop (1–20 and even numbers)
for (let i = 1; i <= 20; i++) {
    console.log("Number:", i);
}

for (let i = 2; i <= 20; i += 2) {
    console.log("Even:", i);
}


// 15. While loop (Sum 1 to N)
let N = 5;
let sum = 0;
let i = 1;

while (i <= N) {
    sum += i;
    i++;
}
console.log("Sum from 1 to", N, "=", sum);


// 16. Break and Continue
for (let i = 1; i <= 10; i++) {

    if (i === 5) continue;  // Skip 5
    if (i === 8) break;     // Stop at 8

    console.log("Loop Value:", i);
}



/* =====================================================
   SECTION 4 — FUNCTIONS
===================================================== */

// 17. Function returning sum
function addNumbers(x, y) {
    return x + y;
}
console.log("Sum Function:", addNumbers(5, 6));


// 18. Arrow function
const addArrow = (x, y) => x + y;
console.log("Arrow Sum:", addArrow(10, 15));


// 19. Prime number check
function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log("Is 7 Prime?", isPrime(7));


// 20. Reverse string
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log("Reversed:", reverseString("Hello"));


// 21. Output?
function test() {
    return;
    console.log("Hello");
}
test();
// Nothing prints because return stops execution.


// 22. Largest number in array
function findLargest(arr) {
    return Math.max(...arr);
}
console.log("Largest:", findLargest([5, 8, 12, 3, 20]));



/* =====================================================
   SECTION 5 — INTEGRATED CHALLENGE
===================================================== */

// Function to calculate grade
function calculateGrade(marks) {
    if (marks >= 90) return "A";
    else if (marks >= 75) return "B";
    else if (marks >= 50) return "C";
    else return "Fail";
}

// Accept student marks
let studentMarks = 82;

// Calculate grade
let studentGrade = calculateGrade(studentMarks);

// Final Output
console.log("Student Marks:", studentMarks);
console.log("Student Grade:", studentGrade);