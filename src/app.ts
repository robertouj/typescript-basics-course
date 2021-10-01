/**
 * Intersection Types:
 * 
 * - with types using "&"
 * - with interfaces with "extends"
 */

type Admin = {
  name: string;
  privilieges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

// both cases wit type or with extends have the same side effect.
// interface Admin {
//   name: string;
//   privilieges: string[];
// };

// interface Employee {
//   name: string;
//   startDate: Date;
// };

// interface ElevatedEmployee extends Admin, Employee {};

const e1: ElevatedEmployee = {
  name: 'Max',
  privilieges: ['create-server'],
  startDate: new Date()
}
console.log(e1);