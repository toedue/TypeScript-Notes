## Static Typing in TypeScript - Introduction

### What Is Static Typing?
- **Definition**: In a statically typed language like TypeScript, variable types are declared explicitly and cannot change after declaration. Type checking happens at **compile time** (when you run `tsc`), catching errors before the code runs.
- **Contrast with Dynamic Typing**: In dynamically typed languages (e.g., PHP, Python, JavaScript), variable types can change at runtime, and type checking happens during **execution**, which can lead to runtime errors.
- **Key Object**: The TypeScript compiler (`tsc`) enforces type rules, producing JavaScript that runs in browsers or Node.js.
- **Key Points**:
  - **Type Safety**: Once a variable is declared with a type (e.g., `number`), you can’t assign a different type (e.g., `string`).
  - **Compile-Time Checks**: Errors like type mismatches are caught when you run `tsc`, not when the code executes.
  - **Performance**: No runtime type checks, leading to faster execution compared to dynamic typing.
  - **Error Detection**: TypeScript catches errors early, improving reliability, especially in large projects.

### Your Examples Explained
Your code shows dynamic typing in PHP, Python, and JavaScript, where variables can change types freely, and errors may appear at runtime. Here’s a quick recap:
- **PHP**:
  ```php
  $num = 10;        // num is a number
  $num = "Elzero";  // num is now a string
  echo $num;        // Outputs: Elzero
  ```
- **Python**:
  ```python
  num = 10          # num is an integer
  num = "Elzero"    # num is now a string
  print(num)        # Outputs: Elzero
  ```
- **JavaScript**:
  ```javascript
  let num = 10;     // num is a number
  num = "Elzero";   // num is now a string
  console.log(num); // Outputs: Elzero
  ```
- **JavaScript (with `repeat`)**:
  ```javascript
  let age = 30;
  if (age > 30) {
    console.log("Good");
  } else {
    console.log(age.repeat(3)); // Error: age.repeat is not a function (number, not string)
  }
  ```
  This throws a runtime error because `age` is a `number`, and `repeat` is a string method.

In TypeScript, these examples would behave differently due to static typing. Let’s see how.

---

## TypeScript Example with Static Typing

Let’s convert your examples to TypeScript, use the `tsconfig.json` settings from your previous input (`rootDir`, `outDir`, `sourceMap`, `removeComments`), and show how TypeScript’s static typing prevents errors. We’ll compile with `tsc` and demonstrate the benefits of compile-time type checking.

### Project Structure:
```
my-project/
├── src/
│   └── index.ts
├── dist/
│   └── (compiled files will go here)
├── tsconfig.json
├── index.html
└── package.json
```

### `tsconfig.json`:
Using your provided options:
```json
{
  "compilerOptions": {
    "target": "ES6",              // Compile to ES6 JavaScript
    "module": "commonjs",         // For Node.js compatibility
    "rootDir": "./src",           // Source files in src/
    "outDir": "./dist",           // Output to dist/
    "sourceMap": true,            // Generate source maps for debugging
    "removeComments": true,       // Remove comments from output
    "strict": true                // Enforce strict type checking
  },
  "include": ["src/**/*"]
}
```

### HTML (`index.html`, for Browser Context):
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>TypeScript Static Typing</title>
</head>
<body>
  <h1>TypeScript Static Typing</h1>
  <p id="output"></p>
  <script src="dist/index.js"></script>
</body>
</html>
```

### TypeScript (`src/index.ts`):
This replicates your PHP/Python/JavaScript examples, but with TypeScript’s static typing:
```typescript
/*
  TypeScript Static Typing Example
  - Demonstrating type enforcement and compile-time error checking
*/

// Example 1: Variable type cannot change
let num: number = 10; // num is explicitly a number
// num = "Elzero";    // Error: Type 'string' is not assignable to type 'number'
console.log(num);     // Will output 10

// Example 2: Replicating the age example
let age: number = 30;
if (age > 30) {
  console.log("Good");
} else {
  // age.repeat(3); // Error: Property 'repeat' does not exist on type 'number'
  console.log(`Age: ${age}`); // Output: Age: 30
}

// Example 3: Fixing the age example with correct type
let message: string = "Hello";
if (age > 30) {
  console.log("Good");
} else {
  console.log(message.repeat(3)); // Output: HelloHelloHello
}

// Example 4: Using an interface for type safety
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Elzero",
  age: 30,
};

// user.age = "30"; // Error: Type 'string' is not assignable to type 'number'
console.log(`User: ${user.name}, Age: ${user.age}`);

// Example 5: DOM manipulation with type safety
const output = document.querySelector("#output") as HTMLElement;
if (output) {
  output.textContent = `User: ${user.name}, Number: ${num}`;
}
```

### Compile the Project:
Run in terminal:
```bash
tsc
```

This compiles `src/index.ts` to `dist/index.js`, generating a source map (`dist/index.js.map`) and removing comments (per `tsconfig.json`).

### Example Compiled Output (`dist/index.js`, Simplified):
```javascript
// Comments removed due to removeComments: true
let num = 10;
console.log(num);
let age = 30;
if (age > 30) {
  console.log("Good");
} else {
  console.log(`Age: ${age}`);
}
let message = "Hello";
if (age > 30) {
  console.log("Good");
} else {
  console.log(message.repeat(3));
}
const user = {
  name: "Elzero",
  age: 30,
};
console.log(`User: ${user.name}, Age: ${user.age}`);
const output = document.querySelector("#output");
if (output) {
  output.textContent = `User: ${user.name}, Number: ${num}`;
}
```

### Run in Watch Mode:
```bash
tsc -w
```
This recompiles `src/index.ts` automatically on changes.

### Run the Compiled JavaScript:
- **Node.js**: Run `node dist/index.js`.
- **Browser**: Serve `index.html` with a web server (e.g., `live-server`).

### What Happens:
- **Compilation**: `tsc` compiles `src/index.ts` to `dist/index.js`, respecting `tsconfig.json` settings:
  - `rootDir: "./src"`: Ensures source files are in `src/`.
  - `outDir: "./dist"`: Outputs compiled files to `dist/`.
  - `sourceMap: true`: Generates `dist/index.js.map` for debugging.
  - `removeComments: true`: Strips comments from `index.js`.
- **Type Errors**:
  - Uncommenting `num = "Elzero";` causes a compile-time error: `Type 'string' is not assignable to type 'number'`.
  - Uncommenting `age.repeat(3);` causes a compile-time error: `Property 'repeat' does not exist on type 'number'`.
  - These errors are caught by `tsc` before the code runs, unlike JavaScript’s runtime errors.
- **DOM Update**: The `<p>` element displays: "User: Elzero, Number: 10".
- **Console Output**:
  - `console.log(num)`: Outputs `10`.
  - `console.log(`Age: ${age}`)`: Outputs `Age: 30`.
  - `console.log(message.repeat(3))`: Outputs `HelloHelloHello`.
  - `console.log(`User: ${user.name}, Age: ${user.age}`)`: Outputs `User: Elzero, Age: 30`.

### Output (Console, Node.js):
```
10
Age: 30
HelloHelloHello
User: Elzero, Age: 30
```

### Visual Output (Browser):
- The `<p>` element shows: "User: Elzero, Number: 10".

### Error Example:
If you try this invalid TypeScript code:
```typescript
let num: number = 10;
num = "Elzero"; // Error
```
Running `tsc` outputs:
```
src/index.ts:3:1 - error TS2322: Type 'string' is not assignable to type 'number'.

3 num = "Elzero";
  ~~~
Found 1 error.
```
This demonstrates TypeScript’s compile-time error detection, unlike PHP, Python, or JavaScript, where `num = "Elzero"` runs fine but could cause issues later.

---

### Key Points
- **Static vs. Dynamic Typing**:
  - **Static (TypeScript, Rust, C, C++)**: Types are fixed at declaration, checked at compile time. Example: `let num: number = 10; num = "Elzero";` fails to compile.
  - **Dynamic (PHP, Python, JavaScript)**: Types can change at runtime, checked during execution, risking runtime errors (e.g., `age.repeat(3)` in JavaScript).
- **Compile-Time Checks**: TypeScript’s `tsc` catches type errors before runtime, unlike JavaScript’s runtime errors (e.g., `TypeError: age.repeat is not a function`).
- **Performance**: Static typing eliminates runtime type checks, improving performance compared to dynamic languages.
- **tsconfig.json**:
  - `"rootDir": "./src"`: Organizes source files.
  - `"outDir": "./dist"`: Separates compiled output.
  - `"sourceMap": true`: Aids debugging by mapping `.js` to `.ts`.
  - `"removeComments": true`: Reduces output file size.
- **Compiler Commands**:
  - `tsc index.ts`: Compiles a single file.
  - `tsc -h`: Shows compiler options.
  - `tsc -w`: Watches for file changes.
  - `tsc --init`: Creates `tsconfig.json`.
- **Error Prevention**: TypeScript prevents errors like those in your JavaScript example (`age.repeat(3)`), which would fail at runtime in JavaScript but is caught at compile time in TypeScript.

---

### Bonus: Comparing with Your Examples
- **Dynamic Typing Issue**: In your JavaScript example:
  ```javascript
  let age = 30;
  console.log(age.repeat(3)); // Runtime error: age.repeat is not a function
  ```
  This fails at runtime because `age` is a number, not a string. In TypeScript, `tsc` catches this during compilation.
- **TypeScript Fix**: By declaring `let message: string = "Hello";`, TypeScript ensures `message.repeat(3)` works, and `age.repeat(3)` is flagged as an error before running.
- **Static Typing Advantage**: TypeScript would prevent the PHP/Python/JavaScript behavior of reassigning `num` from `10` to `"Elzero"`, ensuring type consistency.

---
