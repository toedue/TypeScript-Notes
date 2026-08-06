# Data Types — Void & Never

##  `void`
- Used for **functions that don’t return anything**.
- In **JavaScript**, a function that doesn’t return explicitly will output `undefined`.
- But in **TypeScript**, `void` and `undefined` are **not the same**.

###  Example:
```typescript
function logging(msg: string): void {
  console.log(msg);
  return; // nothing returned
}

console.log(logging("I am a message"));
console.log("Test");
```

**Output:**
```
I am a message
undefined
Test
```

###  Explanation:
- The function `logging()` prints a message but returns nothing → `void`.
- When logged, the function’s result is `undefined`.

---

##  `never`
- A type that **never returns** a value.  
- Used when a function **throws an error** or **runs forever** (no normal completion).

###  Example 1 — Throwing Error
```typescript
const fail = (msg: string): never => {
  throw new Error(msg);
  // return 10; // ❌ Error: A function returning never cannot return a value
};
```

###  Example 2 — Infinite Loop
```typescript
function alwaysLog(name: string): never {
  while (true) {
    console.log(name);
  }
}

alwaysLog("Osama");
// console.log("Test"); // ❌ Unreachable code
```

---

##  Key Differences

| Feature | `void` | `never` |
|----------|--------|---------|
| Returns value | No | Never |
| End of execution | Yes | No |
| Example use | Logging, callbacks | Throw error, infinite loop |
| JS equivalent | `undefined` | None (no return ever) |

---

##  Quick Summary
- **`void`** → function **returns nothing** (but still ends).  
- **`never`** → function **never finishes normally**.  
  - It either **throws** or **loops forever**.  
- These help TypeScript catch logic errors early.

---

 **Best Practice:**  
Use `void` for functions that just do something (like `console.log`).  
Use `never` for cases that should **never happen** or indicate **unreachable code**.
