"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Type assertions
let someValue = "this is a string";
let strLength = someValue.length;
// or
let strLength2 = someValue.length;
// Type guards
function isString(value) {
    return typeof value === "string";
}
function processValue(value) {
    if (isString(value)) {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
// instanceof type guard
class Dog {
    bark() {
        console.log("Woof!");
    }
}
class Cat {
    meow() {
        console.log("Meow!");
    }
}
function makeSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
