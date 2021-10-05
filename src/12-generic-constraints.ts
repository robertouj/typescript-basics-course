/**
 * Constraints:
 * 
 * - Is possible to restrict the types of the generic types (<T>) can be based on,
 *   with the "extends" keyword.
 * 
 *   <T extends object>
 */
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// here we have a silent error, because 30 is not an object
// const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, 30); 
const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { Age: 30 });
console.log(mergedObj); 