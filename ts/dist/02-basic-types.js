"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Primitives
let userName = "Piyush";
let age = 26;
let isActive = true;
// Arrays
let numbers = [1, 2, 3, 4, 5];
let names = ["Piyush", "RoadsideCoder", "AlgoAgarwal"];
// let names: Array<string> = ["Piyush", "RoadsideCoder", "AlgoAgarwal"];
// Tuples
let person = ["Piyush", 26];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let favoriteColor = Color.Blue;
// Any (avoid when possible)
let randomValue = 10;
randomValue = "string";
randomValue = true;
// Unknown (safer than any)
let userInput;
userInput = 5;
userInput = "text";
// The main difference:
// any turns off TypeScript's type checking.
// unknown keeps type checking and forces you to verify the value first.
// Void (for functions that don't return)
function logMessage(message) {
    console.log(message);
}
// Null and Undefined
let nullValue = null;
let undefinedValue = undefined;
