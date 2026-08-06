#  Type Annotations (or Type Signatures) in TypeScript

##  What Are Type Annotations?
Type annotations (also called **type signatures**) are used to **declare the data type** of:
- Variables  
- Function parameters  
- Function return values  
- Objects and arrays  

They help the compiler understand what type of data each variable should hold.

---

##  Why Use Type Annotations?
- To **catch errors early** (before running the program).  
- To make code **easier to read and maintain**.  
- To improve **auto-completion and hints** in editors like VS Code.  
- To help TypeScript perform **strong type checking**.

---

##  Are They Mandatory?
- **No**, they’re **optional** because TypeScript uses **type inference**.  
- If you don’t specify a type, TypeScript automatically **infers** it from the assigned value.  
- However, explicitly declaring types is **recommended** for cleaner and safer code.

---

##  What Happens If We Don’t Use Them?
- TypeScript will treat untyped variables as **`any`**, meaning **no type checking**.  
- You can accidentally assign any data type, which may cause **runtime errors**.  
- It becomes similar to plain JavaScript — losing TypeScript’s main advantage.

---

##  Example Code

```typescript
/*
  Type Annotations || Signature
  -- Indicate The Data Type Of Variables
  -- Indicate The Data Type Of Functions Input/Output
  -- Objects, etc.
*/

let theName = "Elzero";         // Inferred as string
let theAge: number = 40;        // Explicit type: number
let hire: boolean = true;       // Explicit type: boolean
let all: any = "Elzero Web School"; // Can be any type
let allVars;                    // Also treated as any

theName = "Osama";  // ✅ OK
all = 100;          // ✅ OK (because all is any)
```

---

##  Function with Type Annotations
```typescript
function add(n1: number, n2: number) {
  return n1 + n2;
}

console.log(add(10, 20));           // ✅ 30
console.log(typeof add(10, 20));    // "number"
```

- Both `n1` and `n2` must be **numbers**.  
- If you pass a string, TypeScript will **throw a compile-time error**.

---

##  Without Type Annotations
```typescript
function add(n1, n2) {
  return n1 + n2;
}

console.log(add(10, "20"));        // "1020" (string concatenation)
console.log(typeof add(10, "20")); // "string"
```

- Here, TypeScript treats `n1` and `n2` as `any`.  
- You might get unexpected results since `"10" + 20` becomes `"1020"`.

---

##  Summary

| Feature | With Type Annotation | Without Type Annotation |
|----------|----------------------|--------------------------|
| Type Safety | ✅ Yes | ❌ No |
| Error Detection | Early (compile-time) | Late (runtime) |
| Type Inference | Optional | Automatic |
| Example | `let age: number = 40;` | `let age = 40;` |
| Flexibility | Strict | Loose |

---

##  In Short
- **Use type annotations** for clarity and safety.  
- **Avoid `any`** unless absolutely necessary.  
- TypeScript will **infer** types when possible, but being explicit is better.
