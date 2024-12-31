import { isEscapeKey } from './util.js';
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const errorMessage = errorMessageTemplate.cloneNode(true);
const errorMessageCloseButton = errorMessage.querySelector('.error__button');

const closeErrorMessage = () => {
  errorMessage.remove();
  document.removeEventListener('keydown', errorMessageEcsHandle);
  document.removeEventListener('click', errorMessageOutsideClick);
};

function errorMessageEcsHandle(evt) {
  if (isEscapeKey(evt)) {
    closeErrorMessage();
  }
}

function errorMessageOutsideClick(evt) {
  if (!errorMessage.querySelector('.error__inner').contains(evt.target)) {
    closeErrorMessage();
  }
}

const showErrorMessage = () => {
  document.body.appendChild(errorMessage);
  errorMessageCloseButton.addEventListener('click', closeErrorMessage);
  document.addEventListener('keydown', errorMessageEcsHandle);
  document.addEventListener('click', errorMessageOutsideClick);
};

export {showErrorMessage};
