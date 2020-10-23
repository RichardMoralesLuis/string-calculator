export const stringCalculator = (input: string) => {
  const parsedInput = parseInt(input);
  if (isNaN(parsedInput)){
    return []
  }
  return [parsedInput];
};
