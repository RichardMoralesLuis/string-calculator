import { stringCalculator } from '../stringCalculator';

describe('stringCalculator', () => {
  it('Debería devolver un array de un número a partir de una cadena formada por un dicho número caso 2', () => {
    expect(stringCalculator('2')).toStrictEqual([2]);
  });

  it('Debería devolver un array de un número a partir de una cadena formada por un dicho número caso 4', () => {
    expect(stringCalculator('4')).toStrictEqual([4]);
  });

  it('Debería devolver un array array vacio en caso de tener una entrada no válida', () => {
    expect(stringCalculator('a')).toStrictEqual([]);
  });

  it('Debería devolver un array de tantos elementos como números separados por comas esten en la entrada', () => {
    expect(stringCalculator('2, 5, 8')).toStrictEqual([2, 5, 8]);
  });

  it('Debería devolver un array de tantos elementos como números separados por comas esten en la entrada 2', () => {
    expect(stringCalculator('2, 5')).toStrictEqual([2, 5]);
  });

  it('Debería devolver un array de tantos elementos como números separados por comas esten en la entrada 2', () => {
    expect(stringCalculator('a, a')).toStrictEqual([]);
  });

  it('Debería devolver un array de tantos elementos como números separados por comas esten en la entrada 2', () => {
    expect(stringCalculator('\'a\', \'a\'')).toStrictEqual([]);
  });

  it('debería devolver un array vacío si le pasamos una cadena vacía', () => {
    expect(stringCalculator('')).toStrictEqual([]);
  });

  it('Debería devolver un array vacío si le pasamos una cadena de comas', () => {
    expect(stringCalculator(',,,')).toStrictEqual([]);
  });

  it('Debería devolver una array con tantos números como encuentre hasta que se tope con una letra', () => {
    expect(stringCalculator('2,5,a,8')).toStrictEqual([2, 5]);
  });
});
