/**
 * - Unknown Type:
 *   This admit any kind of type, but that need to be ckecked before assign.
 * 
 * - Never Type:
 *   Advice that the fucntion never return. The script ends.
 */
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Roberto';

// userName = userInput; // ERROR: because it need to be validated
if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never { // indication of never return
  throw { message, errorCode: code }; // most common use
  // while (true) {} // another case that never return
}

generateError('An error occurred!', 500); // never return
console.log('This message never will neve be displayed!'); // never executed