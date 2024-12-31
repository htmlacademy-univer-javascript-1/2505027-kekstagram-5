import { renderPhotoList } from './miniatures.js';
import { getData } from './api.js';
import { showError } from './util.js';
import { setDefaultFilterClick, setDiscussedFilterClick, setRandomFilterClick, showFilters} from './filters.js';

getData().then((photos) => {
  renderPhotoList(photos);
  showFilters();
  setDefaultFilterClick(() => {
    renderPhotoList(photos);
  });
  setDiscussedFilterClick(() => {
    renderPhotoList(photos, 'discussed');
  });
  setRandomFilterClick(() => {
    renderPhotoList(photos, 'random');
  });
}).catch((err) => showError(err));
