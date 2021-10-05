/**
 * The "keyof" Constraint:
 * 
 * Create a reference to a key of an object.
 */
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value: ${obj[key]}`;
}

console.log(extractAndConvert({name: 'Max'}, 'name'));