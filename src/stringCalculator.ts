const isNumber = (item): boolean => {
  const parsedInput = parseInt(item);
  return !isNaN(parsedInput);
};

export const stringCalculator = (input: string) => {
  let items = input.split(',');
  const result: number[] = [];

  for (let item of items) {
    if (isNumber(item)) {
      result.push(parseInt(item));
    } else {
      return result;
    }
  }

  return result;
};
