const fitlers = document.querySelector('.img-filters');

function debounce(callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...rest), timeoutDelay);
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

function setupFilters(callback) {
  const debouncedCallback = debounce(callback); // Один общий обработчик
  defaultFilter.addEventListener('click', () => {
    setActiveFilter(defaultFilter);
    debouncedCallback('default');
  });
  randomFilter.addEventListener('click', () => {
    setActiveFilter(randomFilter);
    debouncedCallback('random');
  });
  discussedFilter.addEventListener('click', () => {
    setActiveFilter(discussedFilter);
    debouncedCallback('discussed');
  });
}

export {setupFilters, showFilters};
