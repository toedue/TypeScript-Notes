#  Type Annotations with Arrays 

##  What Are Array Type Annotations?
Array type annotations are used to **define what type of data** an array can hold.  
This helps prevent inserting the wrong type of elements into arrays.

---

##  Example: Basic Type Annotation

```typescript
/*
  Type Annotations With Arrays
*/

let all: string | number | boolean = "Osama";

all = "A";     // ✅ string
all = 100;     // ✅ number
all = true;    // ✅ boolean
```

###  Explanation
- `string | number | boolean` means the variable **can be any of these three types**.  
- The `|` symbol represents a **union type** — it allows multiple possible types for one variable.

---

##  Array Type Example

```typescript
let myFriends: string[] = ["Osama", "Ahmed", "Sayed"];

for (let i = 0; i < myFriends.length; i++) {
  console.log(myFriends[i].repeat(3));
}
```

###  Output
```
OsamaOsamaOsama
AhmedAhmedAhmed
SayedSayedSayed
```

---

##  What Happens If You Add a Wrong Type?
```typescript
myFriends.push(100); // ❌ Error: Argument of type 'number' is not assignable to parameter of type 'string'
```
TypeScript will **catch the error at compile-time**, preventing invalid data types from being added.

---

##  Key Takeaways
- Use `string[]`, `number[]`, `boolean[]`, etc., to define the **element type** in arrays.  
- Use **union types** (like `string | number`) when a variable or array can hold multiple types.  
- TypeScript helps **avoid runtime errors** by checking array types at compile time.

---

##  Summary

| Concept | Syntax | Description |
|----------|---------|-------------|
| String array | `string[]` | Array containing only strings |
| Number array | `number[]` | Array containing only numbers |
| Union variable | `string \| number` | Variable can be string or number |
| Type-safe loop | `for` loop with typed array | Ensures correct operations on elements |

---

##  In Short
- **Array annotations** = define what kind of data your array stores.  
- **Union types** = allow flexibility with type safety.  
- TypeScript ensures **consistent, predictable array data**.
