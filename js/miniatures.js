import { openBigPicture } from './bigPicture.js';

const pictureTemplate = document.querySelector('#picture').content;
const pictureElement = pictureTemplate.querySelector('.picture');
const picturesList = document.querySelector('.pictures');

function removePhotos() {
  const userPhotos = picturesList.querySelectorAll('.picture');

  userPhotos.forEach((photo) => {
    photo.remove();
  });
}

function renderPhotoList(photoList, filter = 'default') {
  const fragment = document.createDocumentFragment();
  let filteredPhotos = photoList.slice();
  switch (filter) {
    case 'random':
      filteredPhotos = filteredPhotos.slice().sort(() => Math.random() - 0.5).slice(0, 10);
      break;
    case 'discussed':
      filteredPhotos = filteredPhotos.slice().sort((a, b) => b.comments.length - a.comments.length);
      break;
    default:
      break;
  }

  filteredPhotos.forEach(({url, likes, comments, description}) => {
    const pictureElementClone = pictureElement.cloneNode(true);
    pictureElementClone.querySelector('img').src = url;
    pictureElementClone.querySelector('img').alt = description;
    pictureElementClone.querySelector('.picture__likes').textContent = likes;
    pictureElementClone.querySelector('.picture__comments').textContent = comments.length;
    fragment.appendChild(pictureElementClone);
    pictureElementClone.addEventListener('click', (evt) => {
      evt.preventDefault();
      openBigPicture(url, description, likes, comments);
    });
  });
  removePhotos();
  picturesList.appendChild(fragment);
}

export {renderPhotoList};
