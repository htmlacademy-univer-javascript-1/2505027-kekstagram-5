import { createPhotos } from './data.js';
import { openBigPicture } from './bigPicture.js';

const pictureTemplate = document.querySelector('#picture').content;
const pictureElement = pictureTemplate.querySelector('.picture');
const picturesList = document.querySelector('.pictures');

const createdPictures = createPhotos(25);
const fragment = document.createDocumentFragment();

createdPictures.forEach(({url, description, likes, comments}) => {
  const pictureElementClone = pictureElement.cloneNode(true);
  pictureElementClone.querySelector('img').src = url;
  pictureElementClone.querySelector('img').alt = description;
  pictureElementClone.querySelector('.picture__likes').textContent = likes;
  pictureElementClone.querySelector('.picture__comments').textContent = comments.length;
  fragment.appendChild(pictureElementClone);
  pictureElementClone.addEventListener('click', (evt) => {
    evt.preventDefault();
    openBigPicture(url,description,likes,comments);
  });
});

picturesList.appendChild(fragment);
