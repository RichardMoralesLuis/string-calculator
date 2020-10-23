import { stringCalculator } from '../stringCalculator';

describe('stringCalculator', () => {
  it('debería devolver un array de números a partir de una cadena formada por un número', () => {
     expect(stringCalculator('2')).toStrictEqual([2]);
  });

  it('debería devolver un array de números a partir de una cadena formada por un número', () => {
     expect(stringCalculator('4')).toStrictEqual([4]);
  });
});
