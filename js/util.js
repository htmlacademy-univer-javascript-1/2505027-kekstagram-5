function getRandomInteger(firstLimit,secondLimit) {
  const min = Math.ceil(Math.min(firstLimit,secondLimit));
  const max = Math.floor(Math.max(firstLimit,secondLimit));
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomArrayElement = (array) => array[getRandomInteger(0,array.length - 1)];

function getIntegerRange(start,end) {
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

export {getRandomArrayElement, getRandomNumberWithNoRepeat, getRandomInteger, getIntegerRange};
