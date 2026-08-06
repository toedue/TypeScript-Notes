# Interface Reopening & Use Cases

##  What Is Interface Reopening?

In TypeScript, **interfaces with the same name can be declared multiple times**.  
TypeScript **merges them automatically** into a single interface.

This is called **interface reopening**, and it allows you to **extend interfaces without using inheritance**.

---

##  Example — Reopening Interface

```typescript
// Homepage settings
interface Settings {
  readonly theme: boolean;
  font: string;
}

// Articles page settings
interface Settings {
  sidebar: boolean;
}

// Contact page settings
interface Settings {
  external: boolean;
}

// Merged interface
let userSettings: Settings = {
  theme: true,
  font: "Open Sans",
  sidebar: false,
  external: true
};
```

###  Explanation:

- TypeScript automatically merges all `Settings` interfaces into **one combined interface**:  
  ```typescript
  interface Settings {
    readonly theme: boolean;
    font: string;
    sidebar: boolean;
    external: boolean;
  }
  ```
- You can then **use the merged interface** as a type for objects like `userSettings`.

---

##  Use Cases

| Use Case | Example |
|----------|---------|
| **Modular project structure** | Define different parts of a UI in separate files but merge them in one interface |
| **Extending 3rd-party libraries** | Add new properties to existing interfaces without modifying the original code |
| **Page-specific settings** | Homepage, Articles, and Contact pages can declare separate settings but merge into a single type |

---

##  Summary

- Interface reopening allows **multiple declarations of the same interface name**.  
- TypeScript **merges them automatically**.  
- Useful for **modular, scalable code** or when extending external interfaces.  
- Works only with **interfaces**, not type aliases.

---

