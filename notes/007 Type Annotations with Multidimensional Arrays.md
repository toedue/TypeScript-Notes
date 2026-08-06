#  Type Annotations with Multidimensional Arrays 

##  What Are Multidimensional Arrays?
A **multidimensional array** is simply an array that contains **other arrays** (or mixed data types) as elements.  
TypeScript allows you to **explicitly define** the types of values inside each array — even if they are nested.

---

##  Example

```typescript
/*
  Type Annotations With Multidimensional Arrays
*/

let arrayOne: number[] = [1, 2, 3, 4, 5];
let arrayTwo: string[] = ["A", "B", "C"];
let arrayThree: (string | number)[] = [1, 2, 3, 4, "A", "B", "C"];

let arrayFour: (string | number | string[] | boolean)[] = [
  1, 
  2, 
  3, 
  4, 
  "A", 
  "B", 
  ["C", "D"], 
  true, 
  false
];
```

---

##  Explanation

| Variable | Type Annotation | Description |
|-----------|------------------|--------------|
| `arrayOne` | `number[]` | Contains only numbers |
| `arrayTwo` | `string[]` | Contains only strings |
| `arrayThree` | `(string \| number)[]` | Can contain both strings and numbers |
| `arrayFour` | `(string \| number \| string[] \| boolean)[]` | Can contain strings, numbers, booleans, or even nested string arrays |

---

##  Example: Accessing Nested Arrays
```typescript
console.log(arrayFour[6]); // ["C", "D"]
console.log(arrayFour[6][0]); // "C"
```

###  Output
```
[ 'C', 'D' ]
C
```

---

##  In Short
- You can **combine multiple data types** using union types (`|`).  
- Use `[]` after parentheses to indicate it’s an **array of mixed elements**.  
- Multidimensional arrays are just **arrays inside arrays** — and TypeScript can keep them all type-safe.

---

##  Key Tip
If your arrays get too complex, consider defining **custom types** or **interfaces** for better readability.

---

###  Example Using a Type Alias
```typescript
type Mix = string | number | boolean | string[];

let arrayFour: Mix[] = [1, "B", ["C", "D"], false];
```

---

##  Summary

| Concept | Syntax | Example |
|----------|---------|----------|
| Single type array | `number[]` | `[1,2,3]` |
| Mixed type array | `(string \| number)[]` | `["A", 1, 2]` |
| Nested array | `(string[])[]` | `[["A","B"],["C","D"]]` |
| Flexible alias | `type Mix = string \| number \| boolean` | `[1,"A",false]` |

---

