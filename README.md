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

- exclude/include

```json
"include": [
    "src/app.ts",
    "src/analytics.ts"
  ],
  "exclude": [
    "node_modules", // would be the default
  ]
```

- sourceMap

Generate the corresponding .map file to link directly the compiled .js with the .ts original file. Usefull to debugging.

- output/input directories

```json
"outDir": "./dist",
"rootDir": "./src",
```

- remove comments

Don't create the comments in the output js files.

- no emit (noEmit)

To don't emit the output js files, usefull tu check the syntax without compile.

- no emit on error (noEmitOnError)

Prevent to emit compiled ts files with errors.

- strict

Control many strict options to be more precise with the code.

## Organising folders

- src

Has the job to holding all the input, so all the source TypeScript files.

- dist

Has the job to holding all the output, so all the JavaScript files.

## Classes in TypeScript

- shortcut to create a propertie

```typescript
// normal method
public name: string;

constructor(name) {
  this.name = name;
}
// shortcut method
constructor(public name: string) {  
}
```

### Visibility of Methods/Properties

- public: accesible in all context.
- protected: accesible iside the class or extended classes.
- private: accesible only inside the class.
- static: accesible without the need to instantiate an object.

### Abstract classes

This kind of classes define abstract methods that are inherited and need to be implemented in the extended classes. Also this classes can't be instantiated.

```typescript
abstract class Department {
  // constructor and so on ...
  abstract describe(this: Department): void;
}

class ITDepartment extends Department {
  describe() {
    /// code ...
  }
}
```

### Singleton pattern

With this pattern is possible to create a Class that it can instantiate only one object of this type.

```typescript
class SingletonClass {
  private static instance: SingletonClass;

  private constructor() {
  }

  static getInstance() {
    if (SingletonClass.instance) {
      return this.instance;
    }
    this.instance = new SingletonClass();
    return this.instance;
  }
}

const accounting = SingletonClass.getInstance();
```

### Difference between Interface and Type

- One interface can be only used to describe the structure of an object and is the clearer form to do it.
- An interface can be implemented by a class as a contract a class then has to adhere to.
- A Type can also use the union Types and other functionalities.

### Defining a fucntion with an interface

It is possible by defining it with the special syntas as an anonymous function.

```typescript
interface AddFn {
  (a: number, b: number): number;
}

ledd add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
}
```

### Defining an optional property

It is possible to define a property that could be used or not.

```typescript
interface Named {
  readonly name?: string;
  outputName?: string;
}

class Person implements Named {
  name?: string;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }
}
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

- Function.prototype.bind()

The bind() method creates a new function that, when called, has its "this" keyword set to the provided value, with a given sequence of arguments corresponding to the function arguments.

```js
fn.bind( thisValue [, arg1 [, arg2 [, ... ] ] ] );
```
