# Type Annotations with Functions 

##  Purpose
Type annotations in functions help define:
- The **type of each parameter**
- The **type of the return value**

This ensures the function always receives and returns values of the expected type.

---

##  Example

```typescript
/*
  Type Annotations With Functions

  - noImplicitAny

  - noImplicitReturns
  --- Will Check All Code Paths In A Function To Ensure They Return A Value

  - noUnusedLocals
  --- Report Errors On Unused Local Variables

  - noUnusedParameters
  --- Report Errors On Unused Parameters In Functions.
*/

let showMsg = true;

function showDetails(name: string, age: number, salary: number): string {
  let test = 10;
  if (showMsg) {
    return `Hello ${name}, Age Is ${age}, Salary Is ${salary}, Test Variable ${test}`;
  }
  return `No Data To Show`;
}

console.log(showDetails("Osama", 40, 5000));
```

---

##  Explanation

| Option | Description |
|--------|--------------|
| `noImplicitAny` | Forces you to explicitly declare all variable and parameter types. Prevents the compiler from assuming `any`. |
| `noImplicitReturns` | Ensures **all function paths** return a value. Useful to catch missing return statements. |
| `noUnusedLocals` | Reports an error if a **local variable** (like `test`) is declared but never used. |
| `noUnusedParameters` | Reports an error if a **function parameter** (like `name`, `age`, `salary`) isn’t used in the function body. |

---

##  Example Output
```
Hello Osama, Age Is 40, Salary Is 5000, Test Variable 10
```

---

##  Key Notes

### ✅ Function Signature
```typescript
function showDetails(name: string, age: number, salary: number): string
```
- `name`, `age`, `salary` → parameter types  
- `: string` → return type (function must return a string)

###  If You Don’t Use Type Annotations
Without type annotations, TypeScript will infer or assign `any` types, losing type safety.

Example:
```typescript
function showDetails(name, age, salary) {
  return name + age + salary;
}
```
> ❌ Here, the function might behave unexpectedly since types are not checked.

---

##  Summary

| Concept | Description |
|----------|--------------|
| **Parameter Type** | Defines expected input types |
| **Return Type** | Defines what type the function must return |
| **noImplicitAny** | Prevents automatic “any” types |
| **noImplicitReturns** | Ensures every path returns a value |
| **noUnusedLocals / noUnusedParameters** | Helps keep your code clean and error-free |

---

 **Tip:** Use strict compiler options in `tsconfig.json` for better safety:
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

---

Type annotations make your functions **predictable**, **type-safe**, and **easy to debug** — helping catch logical errors before runtime. 
