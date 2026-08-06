# Data Types — Union & Intersection Types

##  Union Types
A **Union Type** allows a variable to hold **more than one possible type**.  
You use the **`|` (pipe)** symbol to represent “**OR**”.

###  Example:
```typescript
let all: number | string = 100;
all = "Elzero";
```

 Meaning → `all` can be either a **number** or a **string**.

---

##  Intersection Types
An **Intersection Type** combines **multiple types into one**.  
You use the **`&` (ampersand)** symbol to represent “**AND**”.

If a Union is **“either or”**,  
then an Intersection is **“both together”**.

---

##  Example — Intersection of Multiple Types

```typescript
type A = {
  one: string,
  two: number,
  three: boolean
};

type B = A & {
  four: number
};

type C = {
  five: boolean
};

type mix = A & C;

function getActions(btns: mix) {
  console.log(`Hello ${btns.one}`);
  console.log(`Hello ${btns.two}`);
  console.log(`Hello ${btns.three}`);
  console.log(`Hello ${btns.five}`);
}

getActions({ one: "String", two: 100, three: true, five: true });
```

###  Output:
```
Hello String
Hello 100
Hello true
Hello true
```

---

##  Explanation
| Symbol | Meaning | Example |
|---------|----------|----------|
| `\|`  | **Union** → either type A or B | `string | number` |
| `&` | **Intersection** → must satisfy both A and B | `A & B` |

---

##  Practical Example
```typescript
type User = {
  id: number;
  name: string;
};

type Admin = {
  permissions: string[];
};

type SuperUser = User & Admin;

const admin: SuperUser = {
  id: 1,
  name: "Osama",
  permissions: ["read", "write", "delete"]
};
```

`SuperUser` combines all properties from both `User` and `Admin`.

---

##  Summary

| Type | Operator | Description |
|-------|-----------|-------------|
| **Union** | `\|` | Variable can be **one of many types** |
| **Intersection** | `&` | Variable must be **all of the combined types** |

---

 **Best Practice:**  
- Use **Union** (`|`) when a value can vary in type.  
- Use **Intersection** (`&`) when combining multiple type definitions.
