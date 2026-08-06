# Data Types — Enums

##  What Are Enums?
Enums (**Enumerations**) allow you to define a set of **named constants**.  
They are useful for **grouping related values** together — improving code organization and readability.

---

##  Key Notes
- Enums are **number-based by default** (first element is `0` unless set otherwise).  
- Can be:
  - **Numeric Enums**
  - **String Enums**
  - **Heterogeneous Enums** (mix of string + number)

---

##  Example 1 — Basic Enum

```typescript
const KIDS = 15;
const EASY = 9;
const MEDIUM = 6;
const HARD = 3;

enum Level {
  Kids = 15,
  Easy = 9,
  Medium = 6,
  Hard = 3
}

let lvl: string = "Easy";

if (lvl === "Easy") {
  console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Easy}`);
}
```

###  Output:
```
The Level Is Easy And Number Of Seconds Is 9
```

###  Why Use Enums?
Instead of hardcoding constants everywhere, enums give you **named references** — more readable and maintainable.

---

##  Example 2 — Enum with References, Calculations & Functions

```typescript
function getHardSeconds(): number {
  return 3;
}

enum Kids {
  Five = 25,
  Seven = 20,
  Ten = 15
}

enum Level {
  Kid = Kids.Ten,          // Refers to another enum
  Easy = 9,
  Medium = Easy - 3,       // Refers to itself
  Hard = getHardSeconds()  // Uses a function
}

let lvl: string = "Easy";

if (lvl === "Easy") {
  console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Hard}`);
}
```

###  Output:
```
The Level Is Easy And Number Of Seconds Is 3
```

---

##  Enum Features

| Feature | Description | Example |
|----------|--------------|----------|
| **Numeric Enum** | Default behavior, starts from 0 or custom number | `enum Color { Red, Green, Blue }` |
| **String Enum** | Each value is a string | `enum Role { Admin = "ADMIN" }` |
| **Heterogeneous** | Mix numbers + strings | `enum Mix { Yes = 1, No = "NO" }` |
| **Referencing** | Enum can refer to itself or other enums | `Level.Kid = Kids.Ten` |
| **Computed Values** | Enums can use expressions or functions | `Hard = getHardSeconds()` |

---

## Summary
- Enums make code more **structured and semantic**.  
- Can represent **levels, roles, states, modes**, etc.  
- Support **computed** and **referenced** values for flexibility.

---

 **Best Practice:**  
Use enums for **fixed sets of related constants**, like difficulty levels, user roles, or app states.
