/**
 * - Return types: number | string ...
 * 
 * - Return: void
 *   It means that the function returns nothing.
 *   But JavaScript actually returns undefined.
 * 
 * - Function Types
 *   Describe what kind of function is needed.
 *   It match the number of arguments and their types, also what it returns.
 * 
 * - Callbacks
 */
function add(n1: number, n2: number): number { // return: number
  return  n1 + n2;
}

// Function Types: define a callback function that receive the result of the previous operation
function addAndHandle(n1: number, n2: number, cb: (a: number) => void) { 
  let result = n1 + n2;
  cb(result); // callback function will handle the result
}

function printResult(num: number) { // return: void (inferred)
  console.log(`Result:  ${num}`);
}

// function printResult(num: number): undefined { // return: undefined
//   console.log(`Result:  ${num}`);
//   return;
// }

console.log(printResult(add(5, 12))); // void return: undefined

// let combinedValues: Function;
let combinedValues: (a: number, b: number) => number; // Function Types: 2 arguments type number and return a number

combinedValues = add;
// combinedValues = printResult; // now the function don't match
// combinedValues = 5; // now is not possible to assign

console.log(combinedValues(2, 14));

// here the handle callback function show the result
addAndHandle(5, 8, (result) => console.log(result));