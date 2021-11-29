let items = document.querySelectorAll('.shop-item');
let filter = document.querySelector('.category-item');

filter.onchange = function () {
  for (let item of items) {
    if (item.dataset.category !== filter.value && filter.value !== 'all-item') 
    {
      item.classList.add('hidden');
    } else {
      item.classList.remove('hidden');
    }
  }
};

