function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // code skipped when using TypeScript
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error('Incorrect input!');
  // }
  const result = n1 + n2;
  if (showResult) {
    console.log(`${phrase} ${result}`);
  }
}

// const number1 = '5'; // error marked during compilation
const number1 = 1; // 5.0
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);

