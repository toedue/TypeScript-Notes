# Type Annotations with Objects

##  What Are Object Type Annotations?

Type annotations for objects help define:
- The **structure** of the object (what keys it must have)
- The **type of each property**
- Whether a property is **optional**
- Whether a property is **read-only**

---

##  Example

```typescript
let myObject: {
  readonly username: string,
  id: number,
  hire?: boolean, // Optional
  skills: {
    one: string,
    two: string
  }
} = {
  username: "Elzero",
  id: 100,
  hire: true,
  skills: {
    one: "HTML",
    two: "CSS"
  }
};

// myObject.username = "Osama"; // ❌ Error: 'username' is read-only
myObject.id = 101;    // ✅ Allowed
myObject.hire = false; // ✅ Optional property can be modified

console.log(myObject.username);
console.log(myObject.id);
console.log(myObject.hire);
console.log(myObject.skills.one);
```

---

##  Explanation

| Property | Description | Example |
|-----------|--------------|----------|
| `readonly` | Makes a property **immutable** (cannot be reassigned) | `readonly username: string` |
| `?` | Marks a property as **optional** | `hire?: boolean` |
| Nested Object | Allows defining **object within object** | `skills: { one: string; two: string }` |

---

##  Output

```
Elzero
101
false
HTML
```

---

##  Summary

| Feature | Symbol | Description |
|----------|---------|-------------|
| Read-only property | `readonly` | Can be set once only |
| Optional property | `?` | May or may not exist |
| Nested object types | `{}` | Define structured sub-objects |

---

 **Best Practice:**  
Use **readonly** for data that shouldn’t change (like IDs or usernames).  
Use **optional properties** for data that may not always be provided.
