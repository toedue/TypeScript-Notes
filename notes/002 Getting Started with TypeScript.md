## TypeScript - Introduction

### What Is TypeScript?
- **Definition**: TypeScript is an open-source language developed by Microsoft that builds on JavaScript by adding static types. It compiles to plain JavaScript, so it runs anywhere JavaScript does (browsers, Node.js, etc.).
- **Key Object**: The TypeScript compiler (`tsc`) converts `.ts` files (TypeScript) into `.js` files (JavaScript).
- **Key Points**:
  - **Superset of JavaScript**: All valid JavaScript code is valid TypeScript code.
  - **Static Typing**: Add types (e.g., `string`, `number`) to variables, functions, etc., to catch errors during development.
  - **Tooling**: Provides better IDE support (e.g., IntelliSense, autocompletion) and compile-time error checking.
  - **Use Case**: Ideal for large-scale applications where type safety reduces bugs.

### What Do the Commands Do?
Your commands set up and verify a TypeScript environment:
- `node -v`: Checks the installed version of Node.js, a runtime needed to run JavaScript/TypeScript apps.
- `npm i -g typescript`: Installs the TypeScript compiler globally using npm (Node Package Manager).
- `tsc -v`: Checks the installed version of the TypeScript compiler.
- `tsc index.ts`: Compiles a TypeScript file (`index.ts`) into a JavaScript file (e.g., `index.js`).

### What Can We Do With TypeScript?
- **Add Types**: Define types for variables, function parameters, and return values.
- **Compile Code**: Use `tsc` to convert TypeScript to JavaScript.
- **Run JavaScript Output**: Execute the compiled `.js` files with Node.js.
- **Configure Compilation**: Use a `tsconfig.json` file to customize compiler behavior (e.g., target JavaScript version, output directory).
- **Catch Errors Early**: TypeScript’s type system catches type-related errors before runtime.

---

## Example Setup and Code

### Step 1: Understanding the Commands
Let’s walk through the commands you provided and their purpose.

#### Terminal Commands:
```bash
# Check Node.js version (ensures Node.js is installed)
node -v

# Install TypeScript compiler globally
npm i -g typescript

# Check TypeScript compiler version
tsc -v

# Compile a TypeScript file (index.ts) to JavaScript
tsc index.ts
```

#### What Happens:
- `node -v`: Outputs the Node.js version (e.g., `v20.17.0`). Node.js is required to run the compiled JavaScript.
- `npm i -g typescript`: Installs the TypeScript compiler globally, making the `tsc` command available in your terminal.
- `tsc -v`: Outputs the TypeScript compiler version (e.g., `Version 5.6.3`).
- `tsc index.ts`: Compiles `index.ts` into `index.js`. If `index.ts` doesn’t exist, it throws an error.

#### Sample Output (Console):
Assuming Node.js and TypeScript are installed:
```bash
$ node -v
v20.17.0

$ npm i -g typescript
# (Installs TypeScript globally, may show installation logs)

$ tsc -v
Version 5.6.3

$ tsc index.ts
# (Compiles index.ts to index.js, no output if successful)
```

---

### Step 2: Sample TypeScript Program
Let’s create a simple TypeScript program to demonstrate types, compilation, and execution, similar to your BOM example’s structure.

#### HTML (Assumed for Browser Context):
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Learn TypeScript</title>
</head>
<body>
  <h1>Welcome to TypeScript</h1>
  <script src="index.js"></script> <!-- Loads compiled JavaScript -->
</body>
</html>
```

#### TypeScript (`index.ts`):
```typescript
/*
  TypeScript Introduction Example
  - Demonstrating basic types, functions, and DOM manipulation
*/

// Define a variable with a type
let message: string = "Hello, TypeScript!";

// Function with typed parameters and return type
function greet(name: string): string {
  return `Welcome, ${name}!`;
}

// Update the DOM
const heading = document.querySelector("h1");
if (heading) {
  heading.textContent = message;
}

// Log to console
console.log(greet("Developer"));

// Interface for type safety
interface User {
  name: string;
  age: number;
}

// Use the interface
const user: User = {
  name: "Alice",
  age: 25,
};

// Function using the interface
function displayUser(user: User): void {
  console.log(`Name: ${user.name}, Age: ${user.age}`);
}

displayUser(user);

// Array with specific type
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(`Sum: ${numbers.reduce((a, b) => a + b, 0)}`);

// TypeScript enum
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}
const favoriteColor: Color = Color.Blue;
console.log(`Favorite Color: ${favoriteColor}`);
```

#### Compile the TypeScript File:
Run in terminal:
```bash
tsc index.ts
```

This generates `index.js` (plain JavaScript). Example compiled output (simplified):
```javascript
// index.js (compiled from index.ts)
let message = "Hello, TypeScript!";
function greet(name) {
  return `Welcome, ${name}!`;
}
const heading = document.querySelector("h1");
if (heading) {
  heading.textContent = message;
}
console.log(greet("Developer"));
const user = {
  name: "Alice",
  age: 25,
};
function displayUser(user) {
  console.log(`Name: ${user.name}, Age: ${user.age}`);
}
displayUser(user);
let numbers = [1, 2, 3, 4, 5];
console.log(`Sum: ${numbers.reduce((a, b) => a + b, 0)}`);
var Color;
(function (Color) {
  Color["Red"] = "RED";
  Color["Green"] = "GREEN";
  Color["Blue"] = "BLUE";
})(Color || (Color = {}));
const favoriteColor = Color.Blue;
console.log(`Favorite Color: ${favoriteColor}`);
```

#### Run the Compiled JavaScript:
For Node.js, run:
```bash
node index.js
```

For the browser, serve the HTML file (e.g., using a local server like `live-server`) to load `index.js`.

#### What Happens:
- **Compilation**: `tsc index.ts` converts `index.ts` to `index.js`, stripping out TypeScript-specific features (e.g., types, interfaces, enums) while keeping the logic intact.
- **DOM Update**: The `<h1>` text changes to "Hello, TypeScript!" in the browser.
- **Console Output**:
  - `greet("Developer")` logs: `Welcome, Developer!`
  - `displayUser(user)` logs: `Name: Alice, Age: 25`
  - `numbers.reduce(...)` logs: `Sum: 15`
  - `favoriteColor` logs: `Favorite Color: BLUE`
- **Type Safety**: If you try invalid code (e.g., `user.age = "25"`), TypeScript throws a compile-time error: `Type 'string' is not assignable to type 'number'`.

#### Output (Console, Node.js):
```
Welcome, Developer!
Name: Alice, Age: 25
Sum: 15
Favorite Color: BLUE
```

#### Visual Output (Browser):
- The page’s `<h1>` changes to "Hello, TypeScript!".

---

### Key Points
- **Node.js Dependency**: `node -v` confirms Node.js is installed, necessary for npm and running compiled JavaScript.
- **Global TypeScript**: `npm i -g typescript` makes `tsc` available everywhere. Alternatively, install locally with `npm i typescript --save-dev`.
- **Compilation**: `tsc index.ts` generates `index.js`. Use `tsconfig.json` for project-wide settings (e.g., `"target": "ES6"`, `"outDir": "./dist"`).
- **Type Safety**: Types (`string`, `number`), interfaces (`User`), and enums (`Color`) prevent errors like assigning wrong types.
- **Running Code**:
  - **Node.js**: Run `node index.js` for server-side execution.
  - **Browser**: Include `index.js` in HTML and serve via a web server.
- **Error Handling**: TypeScript catches errors at compile time (e.g., `tsc` fails if types don’t match), unlike JavaScript’s runtime errors.
- **Modern Features**: TypeScript supports ES6+ features (e.g., arrow functions, template literals) and adds its own (e.g., interfaces, enums).

---

### Bonus: Setting Up `tsconfig.json`
To make compilation easier, create a `tsconfig.json` file:
```json
{
  "compilerOptions": {
    "target": "ES6",
    "outDir": "./dist",
    "strict": true,
    "module": "commonjs"
  },
  "include": ["*.ts"]
}
```

Then, run `tsc` (no file name needed) to compile all `.ts` files to the `dist` folder.

---
