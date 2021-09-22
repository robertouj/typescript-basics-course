# TypeScript

## Why TypeScript?

- Less error code
- Cleaner code

## What is TypeScript

- Is a superset of JavaScript. A language building up on JavaScript
- Add new features and advantages to JavaScript
- Browser can't execute TypeScript. It's also a compiler which run over your code to compile TypeScript to JavaScript.
- It is possible to write easier code that compiles to a more complex JavaScript snippets.
- Permit to identify errors in code before it runs with extra error checking.

## Installing TypeScript

```console
npm install -g typescript
```

## Compiling ts files

It is possible to compile the ts files and get the error messages from the console.

```console
tsc my-ts-script.ts
```

## Basic syntax

- Non-null Assertion Operator (Postfix !)

TypeScript also has a special syntax for removing null and undefined from a type without doing any explicit checking. Writing ! after any expression is effectively a type assertion that the value isn’t null or undefined:

```js
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
```

<https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#non-null-assertion-operator-postfix->

## Another concepts learned

- Unary plus (+)

Writing + before a variable, convert it into a number.

```js
const x = '1';

console.log(typeof +x === 'number'); // expected output: true
```

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus>
