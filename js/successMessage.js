import {isEscapeKey} from './util.js';
const successMessage = document.querySelector('#success').content.querySelector('.success');
const successMessageCloseButton = successMessage.querySelector('.success__button');

function closeSuccessMessage() {
  successMessage.remove();
  document.removeEventListener('keydown', successMessageEcsHandle);
  document.removeEventListener('click', successMessageOutsideClick);
}

function successMessageEcsHandle(evt) {
  if (isEscapeKey(evt)) {
    closeSuccessMessage();
  }
}

let ignoreFirstClick = false;

function successMessageOutsideClick(evt) {
  if (ignoreFirstClick) {
    ignoreFirstClick = false;
    return;
  }
  if (!successMessage.querySelector('.success__inner').contains(evt.target)) {
    closeSuccessMessage();
  }
}

function showSuccessMessage() {
  document.body.appendChild(successMessage);
  ignoreFirstClick = true;
  successMessageCloseButton.addEventListener('click', closeSuccessMessage);
  document.addEventListener('keydown', successMessageEcsHandle);
  document.addEventListener('click', successMessageOutsideClick);
}

export {showSuccessMessage};
