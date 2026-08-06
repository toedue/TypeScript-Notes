# Interface

##  What Is an Interface?

An **interface** in TypeScript defines the **shape of an object** —  
it tells the compiler what properties and types an object should have.

It’s similar to a **type alias**, but mainly used for **object structures** and **contracts** between parts of code.

---

##  Interface Basics

### Example:
```typescript
interface User {
  id?: number,             // Optional property
  readonly username: string, // Read-only property
  country: string
}

let user: User = {
  id: 100,
  username: "Elzero",
  country: "Egypt"
}

user.country = "Syria"; // ✅ Allowed
// user.username = "Osama"; // ❌ Error: Cannot assign to 'username' because it is a read-only property

console.log(user);
```

---

##  Interface with Functions

You can also **use interfaces as function parameters** to ensure the passed object follows the correct structure.

```typescript
function getData(data: User) {
  console.log(`Id Is ${data.id}`);
  console.log(`Username Is ${data.username}`);
  console.log(`Country Is ${data.country}`);
}

getData({ id: 200, username: "Osama", country: "KSA" });
```

###  Output:
```
Id Is 200
Username Is Osama
Country Is KSA
```

---

##  Explanation

| Feature | Symbol | Description |
|----------|---------|-------------|
| Optional property | `?` | The property may or may not exist |
| Read-only property | `readonly` | Value cannot be reassigned |
| Used with functions | `function getData(data: User)` | Enforces structure for parameters |
| Works like a blueprint | `interface User { ... }` | Defines what an object should look like |

---

## Summary

- Interfaces describe **the structure of objects**.  
- Can contain **optional (`?`)** and **readonly** properties.  
- Used with **objects** and **functions** to ensure **type safety**.  
- More flexible and extendable than type aliases in larger projects.

---

**Best Practice:**  
Use **interfaces** when defining **object models** or **function contracts** in your app.  
Use **type aliases** for unions, intersections, or complex type combinations.
