const isNumber = (item): boolean => {
  const parsedInput = parseInt(item);
  return !isNaN(parsedInput);
};

const javiFn = (input: string) => {
  const result: number[] = [];

  const isInputRanged = input.includes('-');
  if (isInputRanged) {
    const rangedInput = input.split('-');
    for (let i = parseInt(rangedInput[0]); i <= parseInt(rangedInput[1]); i++) {
      result.push(i);
    }
    return result;
  }

  let items = input.split(',');

  for (let item of items) {
    if (isNumber(item)) {
      result.push(parseInt(item));
    } else {
      return result;
    }
  }

  return result;
};

export const stringCalculator = (input: string) => {
  const items = input.split(',');

  const result: number[] = [];
  for (const item of items) {
    if (item === 'a') {
      return result;
    }

    result.push(...javiFn(item));
  }
  return result;
};
