export const stringCalculator = (input: string) => {
  if (input.includes(',')) {
    let items = input.split(',');
    const areItemsAreNumbers = items.some( (item) => {
      const parsedInput = parseInt(item);
      if (isNaN(parsedInput)){
        return false;
      }    
      return true;
    });
    if (areItemsAreNumbers) {
      return JSON.parse("[" + input + "]");
    } else {
      return [];
    }
  }
  const parsedInput = parseInt(input);
  if (isNaN(parsedInput)){
    return []
  }
  return [parsedInput];
};
