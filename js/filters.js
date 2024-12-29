const fitlers = document.querySelector('.img-filters');

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

function showFilters() {
  fitlers.classList.remove('img-filters--inactive');
}

const defaultFilter = fitlers.querySelector('#filter-default');
const randomFilter = fitlers.querySelector('#filter-random');
const discussedFilter = fitlers.querySelector('#filter-discussed');

function setActiveFilter(activeFilter) {
  [defaultFilter, randomFilter, discussedFilter].forEach((filter) => {
    filter.classList.remove('img-filters__button--active');
  });
  activeFilter.classList.add('img-filters__button--active');
}

function setDefaultFilterClick(callback) {
  defaultFilter.addEventListener('click', () => {
    setActiveFilter(defaultFilter);
    debounce(callback)();
  });
}

function setRandomFilterClick(callback) {
  randomFilter.addEventListener('click', () => {
    setActiveFilter(randomFilter);
    debounce(callback)();
  });
}

function setDiscussedFilterClick(callback) {
  discussedFilter.addEventListener('click', () => {
    setActiveFilter(discussedFilter);
    debounce(callback)();
  });
}

export {setDefaultFilterClick, setDiscussedFilterClick, setRandomFilterClick, showFilters};


