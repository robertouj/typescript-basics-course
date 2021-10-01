/**
 * Index Properties / Index signature:
 * 
 * It is a feature that allows to create objects with more
 * flexible properties.
 * 
 * interface someInterface {
 *   [key: string]: string;
 * }
 */
interface errorContainer {
  [prop: string]: string; // is possible to create undefined number of properties                          
}                         // with the key matching with a string and string values

const errorBag: errorContainer = {
  email: 'Not a valid email',
  username: 'Name can\'t be empty'
}