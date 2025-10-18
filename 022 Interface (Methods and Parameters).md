# Interface (Methods and Parameters)

##  What Is an Interface Method?

Interfaces can define **functions (methods)** that an object must implement.  
This ensures the object has specific **function names, parameters, and return types**.

---

##  Example

```typescript
interface User {
  id: number;
  username: string;
  country: string;
  sayHello(): string;              // Method with no parameters
  sayWelcome: () => string;        // Arrow function style
  getDouble(num: number): number;  // Method with a parameter
}

let user: User = {
  id: 100,
  username: "Elzero",
  country: "Egypt",

  sayHello() {
    return `Hello ${this.username}`;
  },

  sayWelcome: () => {
    return `Welcome ${user.username}`;
  },

  getDouble(n) {
    return n * 2;
  }
}

console.log(user.id);
console.log(user.sayHello());
console.log(user.sayWelcome());
console.log(user.getDouble(100));
```

---

##  Explanation

| Feature | Example | Description |
|----------|----------|-------------|
| **Method in Interface** | `sayHello(): string` | Defines a method name and return type |
| **Arrow Function Style** | `sayWelcome: () => string` | Alternative syntax using arrow functions |
| **Parameter Type** | `getDouble(num: number): number` | Ensures parameter and return type are both numbers |
| **Implementation** | Object must define all methods listed in the interface |

---

##  Output
```
100
Hello Elzero
Welcome Elzero
200
```

---

## Summary

- Interfaces can define **method names, parameters, and return types**.  
- The implementing object must **define all methods**.  
- Methods can be declared using **normal** or **arrow function** syntax.  
- Useful for ensuring **consistent behavior** across multiple objects.

---

 **Best Practice:**  
Use interface methods to **enforce consistent APIs** in objects and classes.  
Example: ensuring every `User` object has the same greeting or calculation functions.
