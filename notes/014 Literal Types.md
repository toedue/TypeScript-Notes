#  Literal Types 

##  What Are Literal Types?
- **Literal types** allow a variable to have **exactly specified values**.  
- Useful for **limited, fixed options** (e.g., status codes, directions, boolean flags).  
- Can be combined with **functions** to enforce specific return types.

---

##  Example: Literal Types with Function

```typescript
type nums = 0 | 1 | -1;

function compare(num1: number, num2: number): nums {
  if (num1 === num2) {
    return 0;
  } else if (num1 > num2) {
    return 1;
  } else {
    return -1;
  }
}

console.log(compare(20, 20)); // 0
console.log(compare(20, 15)); // 1
console.log(compare(20, 30)); // -1
```

### Notes
- `type nums = 0 | 1 | -1` → variable or function return type can **only be 0, 1, or -1**.  
- The compiler **prevents invalid values** from being assigned.

---

##  Example: Using Literal Type Variable

```typescript
let myNumber: nums = 1;   // ✅ OK
// let myNumber: nums = 5; // ❌ Error: Type '5' is not assignable to type 'nums'
```

### ✅ Output
```
0
1
-1
```

