"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Basic function with types
function add(a, b) {
    return a + b;
}
// Optional parameters
function greet(name, greeting) {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}!`;
}
console.log(greet("Abudy")); // Hello, Abudy!
console.log(greet("Abudy", "Hi")); // Hi, Abudy!
// Default parameters
function multiply(a, b = 1) {
    return a * b;
}
// Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
// Arrow functions
const divide = (a, b) => a / b;
// Function types
let calculate;
calculate = add;
