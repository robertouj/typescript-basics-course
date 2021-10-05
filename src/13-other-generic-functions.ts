/**
 * Other Generic Type Functions:
 * 
 * Is possible to create more specific generics to accept different
 * types with specific properties.
 */
interface Lengthy {
  length: number;
}

// with that is no necessary to create overloads or large union types
function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = `Got 1 elements.`;
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText]
}