// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // ERROR! because of TypeScript inference that is a string
}

if (person.role === Role.ADMIN) {
  console.log('is admin');
}


/**
 * Example with Tuple
 */
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // this is a Tuple: fixed-length and types array
// } = {
//   name: 'Maximilian',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// };

// person.role.push('admin');
// person.role[1] = 10; // ERROR: in the Tuple the second parameter need to be a string
// person.role[1] = true; // ERROR: type boolean is not allow only number|string
// person.role = [0, 'admin', 'user'] // ERROR: because of the long-fixed Tuple

// let favoriteActivities: string[];
// favoriteActivities = ['Sports'];

// console.log(person);

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
//   // console.log(hobby.map()); // ERROR! because of TypeScript inference that is a string
// }