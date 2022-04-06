import { sum, double } from '../src/index';

describe('Aritmetics Operations', () => {
  it('Should return the sum of the numbers', () => {
    const resultSum = sum(10, 7);

    expect(resultSum).toBe(17);
  });

  it('Should return the double of the numbers', () => {
    let resultDouble = 0;

    resultDouble = double(2, 36);
    expect(resultDouble).toBe(72);

    resultDouble = double();
    expect(resultDouble).toBe(0);
  });
});
