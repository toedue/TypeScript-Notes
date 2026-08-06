"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// It says:
// "Any object of type Point must have:
// an x property that is a number
// a y property that is a number"
let point = { x: 10, y: 20 };
let userId = "piyush123";
let productId = 456;
// Type alias vs Interface
// Interfaces can be extended, type aliases cannot
// Interfaces can be declared multiple times and will merge
// Use interfaces for object shapes, type aliases for unions/intersections
// A type alias creates a new name for a type.
// type Point = {
//   x: number;
//   y: number;
// };
const p1 = {
    x: 10,
    y: 20,
};
let user = "Alice";
let age = 20;
let state = "loading";
const _point = [10, 20];
const add = (a, b) => a + b;
// interface Status = "success" | "error";     ❌ Invalid
// 3. Extending
// Interface
// interface Animal {
//   name: string;
// }
// interface Dog extends Animal {
//   breed: string;
// }
//Type Alias
// type Animal = {
//   name: string;
// };
// type Dog = Animal & {
//   breed: string;
// };
// 4. Declaration Merging (Big Difference)
// interface Person {
//   name: string;
// }
// interface Person {
//   age: number;
// }
// Interfaces can be declared multiple times.
// const p: Person = {
//   name: "Ali",
//   age: 20,
// };
// Type aliases cannot be declared twice.
// type Person = {
//   name: string;
// };
// type Person = {
//   age: number;
// };
// ❌ Error:   Duplicate identifier 'Person'.
