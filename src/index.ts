const sum = (number1: number, number2: number): number => {
  return number1 + number2;
};

const double = (number1 = 0, number2 = 0): number => {
  return number1 * number2;
};

const main = (): void => {
  const sumResult = sum(5, 10);

  console.log('sum', sumResult);

  const doubleResult = double(5);

  console.log('double', doubleResult);
};

main();

export { sum, double };
