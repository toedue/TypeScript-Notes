#  Functions with Optional and Default Parameters 

##  Concepts

### Optional Parameters
- Use the `?` symbol to make a parameter optional.
- Optional parameters can be **omitted** when calling the function.
- TypeScript automatically sets omitted parameters to `undefined`.

### Default Parameters
- Assign a **default value** to a parameter.
- If the argument is `undefined` or not provided, the default value is used.

---

##  Example 1: Optional Parameters (`index.ts`)

```typescript
/*
  Function
  - Optional and Default Parameters

  - In JavaScript, Every Parameter Is Optional => "undefined" If You Didn’t Use It
  - "?" Optional Parameter
*/

function showData(name?: string, age?: number, country?: string) {
  return `${name} - ${age} - ${country}`;
}

console.log(showData("Osama", 40, "Egypt")); // Output: Osama - 40 - Egypt
console.log(showData("Osama"));             // Output: Osama - undefined - undefined
console.log(showData());                     // Output: undefined - undefined - undefined
```

###  Notes
- `name?` makes the `name` parameter **optional**.
- Parameters not provided default to `undefined`.

---

##  Example 2: Default Parameters (`test.ts`)

```typescript
function showData(name = "Un", age?: number, country?: string) {
  return `${name} - ${age} - ${country}`;
}

console.log(showData(undefined, 40, "Egypt")); // Output: Un - 40 - Egypt
console.log(showData("Osama", 40));           // Output: Osama - 40 - undefined
console.log(showData());                       // Output: Un - undefined - undefined
```

###  Notes
- `name = "Un"` sets a **default value** for `name`.
- If `undefined` is passed, the default value is used.
- Other parameters without defaults remain `undefined` if not provided.

---

##  Key Differences

| Concept | Syntax | Behavior |
|---------|--------|---------|
| Optional Parameter | `param?: type` | Can be omitted → TypeScript sets it to `undefined` |
| Default Parameter | `param = value` | If omitted or `undefined` → uses default value |
| JavaScript Default | `param = value` | Same as TypeScript default, but no type checking |

---


- Optional parameters **must come after required parameters**.
- Default parameters can appear **anywhere**, but ordering affects function calls.
- Combining optional and default parameters increases **function flexibility**.

