import { renderPhotoList } from './miniatures.js';
import { getData } from './api.js';
import { showError } from './util.js';

getData().then((photos) => renderPhotoList(photos)).catch((err) => showError(err));
