/**
 * Discriminated Unions:
 * 
 * It is a pattern that can be used with union tpes that makes 
 * implementing type guards easier. The form is creating a literal
 * type property referencing the interface.
 */

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let kindOfSpeed;
  switch (animal.type) {
    case 'bird':
      kindOfSpeed = animal.flyingSpeed;
      break;
    case 'horse':
      kindOfSpeed = animal.runningSpeed;
      break;
  }
  console.log(`Moving at speed: ${kindOfSpeed}`);
}

moveAnimal({ type: 'horse', runningSpeed: 70 });
