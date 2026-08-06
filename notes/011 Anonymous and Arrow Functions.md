#  Anonymous and Arrow Functions 

### Anonymous Function
- A function **without a name**, usually assigned to a variable.
- Can have **typed parameters** and **typed return value**.

### Arrow Function
- A **shorter syntax** for writing functions.
- Uses `=>` to define the function body.
- Supports type annotations for **parameters** and **return type**.

---

##  Example: Anonymous Function

```typescript
const add = function(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(add(10, 20)); // Output: 30
```

### Notes
- `num1: number, num2: number` → parameter types  
- `: number` → return type  
- Anonymous functions are useful for **callbacks** or **inline assignments**.

---

##  Example: Arrow Function

```typescript
const addWithArrow = (num1: number, num2: number): number => num1 + num2;

console.log(addWithArrow(10, 20)); // Output: 30
```

### Notes
- Arrow functions **implicitly return** if the function body is a single expression.  
- Can include a **block** with `{}` for multiple statements:
```typescript
const addBlock = (num1: number, num2: number): number => {
  const sum = num1 + num2;
  return sum;
}
```

---

##  Key Differences

| Feature | Anonymous Function | Arrow Function |
|---------|------------------|----------------|
| Syntax | `function(...) { ... }` | `(...) => ...` |
| `this` context | Dynamic | Lexical (inherits from enclosing scope) |
| Implicit return | ❌ No | ✅ Yes, if single expression |
| Usage | Older JS / flexible | Modern JS / concise |

---




