"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    // Constructor
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    // Methods
    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
    // Getter
    getName() {
        return this.name;
    }
    // Setter
    setName(name) {
        this.name = name;
    }
}
// Shorter syntax with parameter properties
class Employee {
    constructor(id, name, department) {
        this.id = id;
        this.name = name;
        this.department = department;
    }
    getDetails() {
        return `${this.name} works in ${this.department}`;
    }
}
let piyush = new Employee(101, "Piyush", "Engineering");
console.log(piyush.getDetails()); // Piyush works in Engineering
