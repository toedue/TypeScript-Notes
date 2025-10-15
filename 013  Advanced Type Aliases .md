#  Advanced Type Aliases 


### Type Aliases for Objects
- You can define **custom object types** using `type`.  
- Helps **structure data** and **enforce type safety** for object properties.

### Intersection Types (`&`)
- Combine multiple types into **one type**.  
- All properties from each type must exist in the resulting object.

---

##  Example: Object Type Alias

```typescript
type Buttons = {
  up: string,
  right: string,
  down: string,
  left: string
}

type Last = Buttons & {
  x: boolean
}

function getActions(btns: Last) {
  console.log(`Action For Button Up Is ${btns.up}`);
  console.log(`Action For Button Right Is ${btns.right}`);
  console.log(`Action For Button Down Is ${btns.down}`);
  console.log(`Action For Button Left Is ${btns.left}`);
}

getActions({ up: "Jump", right: "Go Right", down: "Go Down", left: "Go Left", x: true });
```

---

##  Explanation
- `Buttons` defines **4 string properties**: `up`, `right`, `down`, `left`.  
- `Last` is an **intersection type**: all properties from `Buttons` **plus** `x: boolean`.  
- `getActions(btns: Last)` ensures the **passed object** contains **all required properties**.  
- TypeScript **enforces type safety** at compile-time.

---

##  Output
```
Action For Button Up Is Jump
Action For Button Right Is Go Right
Action For Button Down Is Go Down
Action For Button Left Is Go Left
```

---

## 
- Type aliases can represent **objects, primitives, or unions**.  
- Intersection types (`&`) combine multiple types into one **composite type**.  
- Helps **avoid repetition** and **maintain clean type definitions**.

---
