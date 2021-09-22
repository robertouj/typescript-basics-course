const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

function add(num1, num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2;
  } else {
    return +num1 + +num2;
  }  
}

button.addEventListener("click", function() {
  console.log(add(input1.value, input2.value));
});

/**
 * Step 1: FAIL
 * - The element returned concat the strings because the value property of an input is always a string:
 *   1 + 50 // return: 150
 */
// const button = document.querySelector("button");
// const input1 = document.getElementById("num1");
// const input2 = document.getElementById("num2");

// function add(num1, num2) {
//   return num1 + num2;
// }

// button.addEventListener("click", function() {
//   console.log(add(input1.value, input2.value));
// });
