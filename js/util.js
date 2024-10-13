const checkLength = (string, maxLength) => string.length <= maxLength;

function isPalindrome(string) {
  const normalizedString = string.replaceAll(' ','').toLowerCase();
  let newString = '';
  for (let i = normalizedString.length - 1; i >= 0; i--) {
    newString += normalizedString[i];
  }
  return (newString === normalizedString);
}

function getDigitsFromString(string) {
  let digit = '';
  for (let i = 0; i <= String(string).length - 1; i++) {
    const currentSymbol = String(string)[i];
    if (!isNaN(currentSymbol) && currentSymbol !== ' ') {
      digit += currentSymbol;
    }
  }
  return digit.length === 0 ? NaN : digit;
}

function getRandomInteger(firstLimit,secondLimit) {
  const min = Math.ceil(Math.min(firstLimit,secondLimit));
  const max = Math.floor(Math.max(firstLimit,secondLimit));
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomArrayElement = (array) => array[getRandomInteger(0,array.length - 1)];

function range(start,end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function getRandomNumberWithNoRepeat(usedItems,firstLimit,secondLimit) {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const newItem = getRandomInteger(firstLimit, secondLimit);
    if (!usedItems.includes(newItem)) {
      usedItems.push(newItem);
      return newItem;
    }
  }
}

export {getRandomArrayElement, getRandomNumberWithNoRepeat, getRandomInteger, range};
