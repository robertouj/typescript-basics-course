# TypeScript

## Why TypeScript?

- Less error code
- Cleaner code

## What is TypeScript?

- Is a superset of JavaScript. A language building up on JavaScript.
- Add new features and advantages to JavaScript
- Browser can't execute TypeScript. It's also a compiler which run over your code to compile TypeScript to JavaScript.
- It is possible to write easier code that compiles to a more complex JavaScript snippets.
- Permit to identify errors in code before it runs with extra error checking.
- TypeScript add:
  - Types
  - Non-JavaScript features like Interfaces, Generics.
  - Rich configuration options.
  - Next-gen JS features compiled down for old browsers.
  - Meta-Programming features like Decorators.
  - Tools that helps even in non TypeScript projects.
- TypeScript helps only during development, before the code get's compiled. It doesn't run in execution time.

## Some difference between JavaScript and TypeScript

- JavaScript uses dynamic types resolved at runtime, TypeScript uses static types setted during development.

## Installing TypeScript

```console
npm install -g typescript
```

## Compiling ts files

It is possible to compile the ts files and get the error messages from the console. It creates a .js file with the result of the compilation.

```console
tsc my-ts-script.ts
```

## Creating Node environment with package.json

It creates the package.json configuration file.

```console
npm init
```

After that it is possible to install all the necessary packages described in the file with the command:

```console
npm install
```

Also it can install a new npm package adding the name

## Install node packages

```console
npm install your-npm-package
```

Another variant install development dependencies

```console
npm install --save-dev your-dev-package
```

## Executing the app

Install lite-server and add a script in the package.json file to start with the server. It runs an index.html file in the root of the project.

```json
"start": "lite-server"
```

## Object Types

As we’ve seen, they can be anonymous:

```js
function greet(person: { name: string, age: number }) {
  return "Hello " + person.name;
}
```

or they can be named by using either an interface

```js
interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  return "Hello " + person.name;
}
```

or a type alias.

```js
type Person = {
  name: string,
  age: number,
};

function greet(person: Person) {
  return "Hello " + person.name;
}
```

ref: <https://www.typescriptlang.org/docs/handbook/2/objects.html>

### Tuple Types

A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.

```js
type StringNumberPair = [string, number];
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

## Watch Node

Compiling ts files with the watch option, the file is compile automatically when the ts file is saved.

```console
tsc app.ts --watch
tsc app.ts -w
```

## Initiating a TypeScript project

With the next command the tsconfig.json file is created to configure the ts project.

```console
tsc --init
```

After that is possible to compile all js files in the whole project with the tsc command and only whatch the files.

```console
tsc -w
```

## TypeScript configurations

Some configurations about the tsconfig.json file.

- target

Set the JavaScript language version for emitted JavaScript and include compatible library declarations.

e.g. "ES5", "ES6", "ES2015", "ES2016", ...

- lib

Can add the common libraries to the project, instead add all the js libraries.

```json
"lib": [
      "DOM",
      "es6",
      "DOM.Iterable",
      "ScriptHost"
    ]
```

## Another concepts learned

- Unary plus (+)

Writing + before a variable, convert it into a number.

```js
const x = "1";

console.log(typeof +x === "number"); // expected output: true
```

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus>

- HTML5: script defer attribute

This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed, but before firing DOMContentLoaded.

```html
<script src="app.js" defer></script>
```

- lite-server

Node application that creates a server running an index.html in the base of the project. It updates automatically the changes in the code when it's saved.

Then the start script can be created to execute the server.

```json
"start": "lite-server"
```

- object assignment

This is one kind of the assignment.

```js
const Role = {};

Role["Admin"] = 1;
```

- Passing values to anonymous functions

It is possible to pass values with a second parenthesis.

```js
const Role = {};

(function (myVar) {
  myVar["ADMIN"] = 0;
})(Role);
```
