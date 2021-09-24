/**
 * - Aliases:
 *   type Combinable
 * 
 * - Union Types:
 *   'number' | 'string'
 * 
 * - Literals:
 *   'as-number' | 'as-text' // in this case string literals
 */
type Combinable  = number | string; // ALIASES + UNION Types;
type ConversionDescriptor = 'as-number' | 'as-text'; // ALIASES + LITERALS + UNION Types

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor 
) {
  let result;
  if (typeof input1 === 'number' || typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = `${input1.toString()} ${input2.toString()}`;
  }
  return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);