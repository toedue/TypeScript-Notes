"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Object type annotation
let user = {
    name: "Abel",
    age: 26,
};
let newUser = {
    id: 1,
    name: "Piyush",
    age: 25,
};
let laptop = {
    name: "MacBook Pro",
    price: 2000,
    getDiscount(percentage) {
        return this.price * (percentage / 100);
    },
};
