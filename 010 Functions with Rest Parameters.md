#  Functions with Rest Parameters

##  Concepts

### Rest Parameter
- Use `...` to represent a **variable number of arguments** as an array.
- Allows functions to accept **any number of arguments** of a specific type.
- Useful for **sum functions, concatenations, or variadic operations**.

### Type Notes
- In TypeScript, **all numbers (integer or float)** are treated as `number`.
- You can also use expressions like `+true` → converted to `1`.

---

##  Example: Sum with Rest Parameters

```typescript
/*
  Function
  - Rest Parameter
  - What About Float => All Is Under Type Number
*/

function addAll(...nums: number[]): number {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  // Alternative: nums.forEach((num) => result += num);
  return result;
}

console.log(addAll(10, 20, 30, 100, 10.5, +true)); 
// Output: 171.5
```

---

##  Explanation
- `...nums: number[]` collects all passed arguments into a **single array**.
- The function **loops through each number** and adds it to the result.
- `+true` converts `true` to `1`, demonstrating TypeScript **type coercion** within `number`.

---

##  Key Points
- Rest parameters **must be the last parameter** in the function.
- All elements in a rest parameter array must match the **declared type** (`number[]` here).
- Supports **any numeric values**, including integers, floats, and numeric expressions.

---

##  Tips
- You can combine **required parameters** with **rest parameters**:
```typescript
function showMsg(msg: string, ...nums: number[]) {
  console.log(msg, nums);
}
showMsg("Numbers:", 10, 20, 30); // Numbers: [10,20,30]
```
- TypeScript will enforce **type safety** for all elements in `nums`.
- This is a cleaner alternative to `arguments` in JavaScript.

---

##  Summary

| Feature | Description |
|---------|-------------|
| Rest Parameter Syntax | `...paramName: type[]` |
| Multiple Arguments | Can accept **any number of values** |
| Type Safety | All elements must match the declared type |
| Float / Integer | Both are treated as `number` |
| Coercion | Expressions like `+true` are allowed if type matches |
