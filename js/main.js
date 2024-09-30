// Дополнительные функции

function getRandomInteger(firstLimit,secondLimit) {
  const min = Math.ceil(Math.min(firstLimit,secondLimit));
  const max = Math.floor(Math.max(firstLimit,secondLimit));
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomArrayElement = (array) => array[getRandomInteger(0,array.length - 1)];

/*function shuffle(array) {
  for (let i = 1; i < array.length; ++i) {
    const j = getRandomInteger(0, i);
    [array[i], array[j]] = [array[j], array[i]];
  }
}*/

function range(start,end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

// Коментарии

const messages = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Константин',
  'Александр',
  'Григорий',
  'Алексей',
  'Владимир',
  'Анастасия',
  'Татьяна',
  'Мария',
  'София',
  'Наталья',
];

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

const usedIdsList = [];

const createComment = () => ({
  id: getRandomNumberWithNoRepeat(usedIdsList,1,1000),
  avatar: `img/avatar-${getRandomInteger(1,6)}.svg`,
  message: getRandomArrayElement(messages),
  name: getRandomArrayElement(NAMES),
});

// Описание фотографии

const ids = range(1,26).reverse();
const urls = ids.map((num) => `photos/${num}.jpg`);


const createPhotoDescription = () => ({
  id: ids.pop(),
  url: urls.pop(),
  description: 'Описание придумайте самостоятельно',
  likes: getRandomInteger(15,200),
  comments: Array.from({length: getRandomInteger(0,30)},createComment)
});

const PHOTO_DESCRIPTIONS_COUNT = 25;

const photoDescriptions = Array.from({length: PHOTO_DESCRIPTIONS_COUNT}, createPhotoDescription);
console.log(photoDescriptions);
