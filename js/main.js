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

const MESSAGES = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'На фото изображена тихая улица с яркими осенними деревьями вдоль тротуаров.',
  'Яркие краски заката окрашивают горизонт, отражаясь в спокойных водах озера.',
  'На переднем плане виден крупный план цветущего цветка с каплями росы на лепестках.',
  'На фотографии виден старинный замок, возвышающийся на склоне холма в лучах вечернего солнца.',
  'Двое друзей смеются и болтают, сидя на лавочке в парке, окружённые зеленью.',
  'Фото показывает оживлённую городскую улицу с современными высотками на заднем плане.',
  'На фото изображен уютный домашний интерьер с камином и креслом возле окна.',
  'В кадре мы видим горную тропу, уходящую в далёкие леса под голубым небом.',
  'На фотографии показан песчаный пляж с парусниками на горизонте и людьми, отдыхающими у воды.',
  'Фото запечатлело фонтаны посреди большого сквера с цветущими клумбами и прохожими.'
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
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

// Описание фотографии

const ids = range(1,26).reverse();
const urls = ids.map((num) => `photos/${num}.jpg`);


const createPhotoDescription = () => ({
  id: ids.pop(),
  url: urls.pop(),
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15,200),
  comments: Array.from({length: getRandomInteger(0,30)},createComment)
});

const PHOTO_DESCRIPTIONS_COUNT = 25;

const photoDescriptions = Array.from({length: PHOTO_DESCRIPTIONS_COUNT}, createPhotoDescription);
console.log(photoDescriptions);
