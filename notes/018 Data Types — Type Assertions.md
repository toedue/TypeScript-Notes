# Data Types — Type Assertions

##  What Is Type Assertion?
Type assertion is a way to **tell TypeScript the exact type** of a value when the compiler **cannot infer it correctly**.

It’s like saying:
> “Hey TypeScript, I know better — treat this variable as this specific type.”

 TypeScript does **not** check whether the assertion is actually correct — it just trusts you.

---

##  Example 1 — DOM Element Casting

```typescript
// Two valid ways to assert a DOM element type
// let myImg = document.getElementById("my-img") as HTMLImageElement;
let myImg = <HTMLImageElement> document.getElementById("my-img");

console.log(myImg.src);
```

###  Explanation:
- The `getElementById()` method returns a **generic HTMLElement**.
- But you know it’s an `<img>` element, so you assert it as an `HTMLImageElement`.
- After that, you can safely access properties like `.src`.

---

##  Example 2 — Asserting Primitive Types

```typescript
let data: any = 1000;
console.log((data as string).repeat(3));
```

###  Explanation:
- `data` is declared as `any`, so TypeScript doesn’t know its real type.
- You assert it as a `string` and use `.repeat(3)` (a string method).
- If `data` is not actually a string at runtime, it will cause an error — but **TypeScript won’t warn you**.

---

##  Type Assertion Syntax

Two equivalent ways:
```typescript
// 1. Angle Bracket syntax
let value = <string>someVariable;

// 2. "as" syntax (recommended, especially with JSX/TSX)
let value = someVariable as string;
```

---

##  Summary

| Feature | Description |
|----------|-------------|
| Purpose | Help TypeScript understand a variable’s type better |
| Syntax | `<Type>variable` or `variable as Type` |
| Runtime behavior | No type checking — just compiler guidance |
| Use case | When working with DOM, APIs, or `any` data |

---

 **Best Practice:**  
Use type assertions **only when you’re sure** of the data type.  
If unsure — use **type guards** (`typeof`, `instanceof`, etc.) instead.
