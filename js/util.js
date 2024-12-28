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

function showError(message) {
  const errorBlock = document.createElement('div');
  errorBlock.style.display = 'flex';
  errorBlock.style.flexDirection = 'column';
  errorBlock.style.justifyContent = 'center';
  errorBlock.style.alignItems = 'center';
  errorBlock.style.backgroundColor = '#f8d7da';
  errorBlock.style.color = '#721c24';
  errorBlock.style.padding = '20px';
  errorBlock.style.border = '1px solid #f5c6cb';
  errorBlock.style.borderRadius = '8px';
  errorBlock.style.maxWidth = '400px';
  errorBlock.style.margin = '50px auto';
  errorBlock.style.textAlign = 'center';
  errorBlock.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';

  const errorTitle = document.createElement('h2');
  errorTitle.textContent = 'Ошибка запроса';
  errorTitle.style.marginBottom = '10px';
  errorBlock.appendChild(errorTitle);

  const errorMessage = document.createElement('p');
  errorMessage.textContent = message;
  errorBlock.appendChild(errorMessage);

  document.body.appendChild(errorBlock);
}

export {getRandomArrayElement, getRandomNumberWithNoRepeat, getRandomInteger, getIntegerRange, showError};
