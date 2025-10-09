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
