#  Statically vs Dynamically Typed Languages

##  Statically Typed Languages (Like Rust, C, C++)
- Variable **types are static** — once declared, you **cannot change** the type.
- **Type checking happens at compile-time**, before the program runs.
- **Better performance at runtime**, since no dynamic type checks are needed.
- **Errors are detected earlier**, during compilation.

###  Example (C / C++ / Rust)
```cpp
int num = 10;
// num = "Elzero"; ❌ Error: cannot assign string to int
printf("%d", num);
```

###  Key Points
- Compiler knows the variable type before running the program.
- Prevents many runtime type-related bugs.

---

##  Dynamically Typed Languages (Like PHP, Python, JavaScript)
- Variable **types are dynamic** — you can change them anytime.
- **Type checking happens at runtime (execution-time)**.
- Errors are only detected **after** running the code.

###  PHP Example
```php
<?php
$num = 10;
$num = "Elzero";
echo $num; // Output: Elzero
?>
```

###  Python Example
```python
num = 10
num = "Elzero"
print(num)  # Output: Elzero

age = 30
if age > 30:
    print("Good")
else:
    print(age + "Bad")  # ❌ TypeError at runtime
```

###  JavaScript Example
```javascript
let num = 10;
num = "Elzero";
console.log(num); // Output: Elzero

let age = 40;
if (age > 30) {
  console.log("Good");
} else {
  console.log(age.repeat(3)); // ❌ TypeError if age is not a string
}
```

---

##  Summary

| Feature | **Statically Typed** | **Dynamically Typed** |
|----------|----------------------|------------------------|
| Type Checking | At compile time | At runtime |
| Variable Type | Fixed after declaration | Can change anytime |
| Performance | Faster (no type checks at runtime) | Slower (checks at runtime) |
| Error Detection | Early (before running) | Late (while running) |
| Example Languages | C, C++, Rust, Java | Python, PHP, JavaScript |

---

##  In Short
- **Static typing** = safer, faster, but less flexible.  
- **Dynamic typing** = more flexible, but can cause runtime errors.
