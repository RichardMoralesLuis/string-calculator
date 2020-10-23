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

const isNotValidInput = (input: string) => {
  const items = input.split('=')
  if (items.length == 1)
    return /[a-z]/i.test(input);
  if (isNumber(items[0]))
    return true;
  return false;
};

const translateItem = (item: string, dict:Tuple[]) :string => {
  let newItem = item
  dict.forEach(tupla => {
    newItem = item.replace(tupla[0], ''+tupla[1]);
  });
  return newItem;
};

type Tuple = [string, number];

export const stringCalculator = (input: string) => {
  const items = input.split(',');
  const variables : Tuple[] = [];
  const result: number[] = [];
  for (const item of items) {
    const tranlateItem = translateItem(item, variables); 
    if (isNotValidInput(tranlateItem)) {
      return result;
    }
    const dict = tranlateItem.split('=')
    if (dict.length > 1) {
      variables.push([dict[0], +dict[1]]);
      continue;
    } 
    result.push(...javiFn(tranlateItem));
  }
  return result;
};
