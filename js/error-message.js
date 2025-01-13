import { isEscapeKey } from './util.js';
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const errorMessage = errorMessageTemplate.cloneNode(true);
const errorMessageCloseButton = errorMessage.querySelector('.error__button');

const closeErrorMessage = () => {
  errorMessage.remove();
  document.removeEventListener('keydown', errorMessageEscapeHandler);
  document.removeEventListener('click', errorMessageOutsideClickHandler);
};

function errorMessageEscapeHandler(evt) {
  if (isEscapeKey(evt)) {
    closeErrorMessage();
  }
}

function errorMessageOutsideClickHandler(evt) {
  if (!errorMessage.querySelector('.error__inner').contains(evt.target)) {
    closeErrorMessage();
  }
}

const showErrorMessage = () => {
  document.body.appendChild(errorMessage);
  errorMessageCloseButton.addEventListener('click', closeErrorMessage);
  document.addEventListener('keydown', errorMessageEscapeHandler);
  document.addEventListener('click', errorMessageOutsideClickHandler);
};

export {showErrorMessage};
