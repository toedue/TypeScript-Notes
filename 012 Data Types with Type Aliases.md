#  Data Types with Type Aliases 

##  What Are Type Aliases?
- **Type aliases** allow you to **create a new name** for a type.  
- Makes your code **more readable** and **reusable**.  
- Can be used with **primitive types**, **unions**, **objects**, **arrays**, etc.

---

##  Example 1: Alias for a Primitive Type

```typescript
type st = string;

let theName: st = "Elzero";
theName = "Osama"; // ✅ OK
```

### Notes
- `st` is now an alias for `string`.  
- Any variable declared as `st` must be a string.

---

##  Example 2: Alias for Union Types

```typescript
type standnum = string | number;

let all: standnum = 10;      // ✅ number
all = 100;                    // ✅ number
all = "Osama";                // ✅ string
```

### Notes
- `standnum` can be either `string` **or** `number`.  
- Useful when multiple variables share the **same union type**.
- **Aliases do not create new types** — they just **rename existing types**.  
- Can be used with:
  - Primitive types (`string`, `number`, `boolean`)  
  - Union types (`string | number`)  
  - Arrays (`string[]`)  
  - Objects and interfaces  

---

## Summary

| Concept | Syntax | Example |
|---------|--------|---------|
| Primitive Alias | `type AliasName = type` | `type st = string;` |
| Union Alias | `type AliasName = type1 \| type2` | `type standnum = string \| number;` |
| Usage | `let varName: AliasName` | `let all: standnum = 10;` |
