# Extending Interfaces

##  What Is Interface Inheritance?

Interfaces in TypeScript can **extend other interfaces**.  
This allows you to **combine multiple interfaces into a new one**, inheriting all their properties.

- Use **`extends`** keyword.
- Supports **multiple inheritance** (extending more than one interface).

---

##  Example — Extending Interfaces

```typescript
interface User {
  id: number;
  username: string;
  country: string;
}

interface Moderator {
  role: string | number;
}

interface Admin extends User, Moderator {
  protect?: boolean; // Optional property
}

let user: Admin = {
  id: 100,
  username: "Elzero",
  country: "Egypt",
  role: "Mod",
  protect: true
};

console.log(user.id);       // 100
console.log(user.username); // Elzero
console.log(user.role);     // Mod
console.log(user.protect);  // true
```

---

##  Explanation

| Feature | Description |
|---------|-------------|
| `extends` | Allows one interface to **inherit properties** from one or more other interfaces |
| Multiple inheritance | `interface Admin extends User, Moderator` |
| Optional properties | Use `?` to mark properties as optional |
| Type safety | Object must satisfy **all properties** from all extended interfaces |

---

##  Use Cases

- **User roles**: Define `User`, `Moderator`, `Admin` with incremental properties.
- **Reusability**: Avoid duplicating properties across interfaces.
- **Scalability**: Easily extend or combine interfaces for complex objects.

---

##  Summary

- Interfaces can **extend one or more interfaces** using `extends`.
- Inherited properties are **combined** in the child interface.
- Optional properties can be added in the extending interface.
- Perfect for **role-based models** or **hierarchical data structures**.

---

✅ **Best Practice:**  
Use interface inheritance to **create structured, reusable, and scalable object types** in large applications.
