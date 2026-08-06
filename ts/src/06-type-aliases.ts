// Type alias
type Point = {
  x: number;
  y: number;
};

// It says:

// "Any object of type Point must have:

// an x property that is a number
// a y property that is a number"

let point: Point = { x: 10, y: 20 };

// Type alias for primitives
type ID = string | number;

let userId: ID = "piyush123";
let productId: ID = 456;

// Type alias vs Interface
// Interfaces can be extended, type aliases cannot
// Interfaces can be declared multiple times and will merge
// Use interfaces for object shapes, type aliases for unions/intersections

// A type alias creates a new name for a type.

// type Point = {
//   x: number;
//   y: number;
// };

const p1: Point = {
  x: 10,
  y: 20,
};

// Here:

// Point → type (blueprint)
// p1 → object

// An interface also describes the shape of an object.

// interface Point {
//   x: number;
//   y: number;
// }

// const p1: Point = {
//   x: 10,
//   y: 20,
// };

// Main Differences

// 1. Declaration Syntax
// 2. Typ. e aliases can describe more than objects. A type alias can represent almost any type, not just objects.

type Username = string;
let user: Username = "Alice";

type Age = number;
let age: Age = 20;

type Status = "success" | "error" | "loading";
let state: Status = "loading";

type Coordinate = [number, number];
const _point: Coordinate = [10, 20];

type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b;

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