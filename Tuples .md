#  Tuples 

##  What Are Tuples?
- A **tuple** is a special type of array where:
  - The **number of elements is fixed**.  
  - The **type of each element** is known and fixed at a specific position.  
- Useful for representing **structured data** with **mixed types**.

---

##  Example: Tuple Declaration

```typescript
/*
  Data Types
  - Tuple
  --- Another Sort Of Array Type
  --- Knows Exactly How Many Elements It Contains
  --- Knows Which Types It Contains At Specific Positions
*/

let article: readonly [number, string, boolean] = [11, "Title One", true];
article = [12, "Title Two", false];

// article.push(100); // ❌ Error: Tuple is readonly
console.log(article);

const [id, title, published] = article;
console.log(id);        // 12
console.log(title);     // Title Two
console.log(published); // false
```

---

##  Explanation
- `readonly [number, string, boolean]` →  
  - Tuple with **3 elements**: number, string, boolean.  
  - `readonly` prevents modification of the tuple (immutable).  
- You can **destructure** tuples like arrays to assign variables:  
  ```typescript
  const [id, title, published] = article;
  ```
- Trying to **push or pop** elements on a readonly tuple causes a compile-time error.

---

##  Key Points
- Tuples are **fixed-length arrays with known types**.  
- Can be **mutable** or **readonly**.  
- Ideal for returning **multiple values from a function** or representing **structured records**.


##  Summary

| Concept | Syntax | Example |
|---------|--------|---------|
| Tuple | `[type1, type2, ...]` | `[number, string, boolean]` |
| Readonly Tuple | `readonly [type1, type2]` | `readonly [number, string]` |
| Destructuring | `const [a, b] = tuple` | `const [id, title] = article` |
