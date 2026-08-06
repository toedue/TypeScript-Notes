"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function setStatus(status) {
    console.log(`Status set to: ${status}`);
}
setStatus("approved");
function printId(id) {
    if (typeof id === "string") {
        console.log(`ID (string): ${id.toUpperCase()}`);
    }
    else {
        console.log(`ID (number): ${id}`);
    }
}
let myCircle = {
    color: "red",
    radius: 10,
};
