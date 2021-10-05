/**
 * Generics Type:
 * 
 * - Is a type which is kind of connected with some other type
 *   and is flexible regarding which exact type that other type is.
 * 
 *   Array<T> / Array<T, U> // returns the intersection T&U
 */
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, {age: 38});
console.log(`Name: ${mergedObj.name} - Age: ${mergedObj.age}`); // the generic has access
// console.log(merge({ name: 'Max' }, {age: 38}));