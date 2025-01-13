import { isEscapeKey } from './util.js';
const successMessage = document.querySelector('#success').content.querySelector('.success');
const successMessageCloseButton = successMessage.querySelector('.success__button');

function closeSuccessMessage() {
  successMessage.remove();
  document.removeEventListener('keydown', successMessageEscapeHandler);
  document.removeEventListener('click', successMessageOutsideClickHandler);
}

function successMessageEscapeHandler(evt) {
  if (isEscapeKey(evt)) {
    closeSuccessMessage();
  }
}

function successMessageOutsideClickHandler(evt) {
  if (!successMessage.querySelector('.success__inner').contains(evt.target)) {
    closeSuccessMessage();
  }
}

function showSuccessMessage() {
  document.body.appendChild(successMessage);
  successMessageCloseButton.addEventListener('click', closeSuccessMessage);
  document.addEventListener('keydown', successMessageEscapeHandler);
  document.addEventListener('click', successMessageOutsideClickHandler);
}

export {showSuccessMessage};
