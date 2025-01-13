import { renderPhotoList } from './miniatures.js';
import { getData } from './api.js';
import { showError } from './util.js';
import { setupFilters, showFilters} from './filters.js';

getData()
  .then((photos) => {
    renderPhotoList(photos); // Первичная отрисовка
    showFilters();
    setupFilters((filterType) => {
      switch (filterType) {
        case 'default':
          renderPhotoList(photos);
          break;
        case 'random':
          renderPhotoList(photos, 'random');
          break;
        case 'discussed':
          renderPhotoList(photos, 'discussed');
          break;
      }
    });
  })
  .catch((err) => showError(err));
