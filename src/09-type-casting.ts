/**
 * Type Casting:
 * 
 * Help to tell TypeScript that some value is of a specific type
 * where TypeScript is not able to detect it on its own.
 * 
 * - Syntax 1: 
 *   <someType>sombeObject;
 * 
 * - Syntax 2: 
 *   sombeObject as someType;
 */


// let userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
let userInputElement = 
  document.getElementById('user-input')! as HTMLInputElement; // more used with React
// with the ! prevent that the object could be null and the subsequent ts error. 
// It is another form in which is no necessary to validate.

userInputElement.value = 'Hi there!';