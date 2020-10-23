const isNumber = (item) => {
  const parsedInput = parseInt(item);
  return !isNaN(parsedInput);
};

export const stringCalculator = (input: string) => {
  let items = input.split(',');
  const areItemsAreNumbers = items.some(isNumber);
  if (!areItemsAreNumbers) {
    return [];
  }

  return JSON.parse('[' + input + ']');
};
