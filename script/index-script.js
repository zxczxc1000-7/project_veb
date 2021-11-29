let upButton = document.querySelector('.up-button');

window.onscroll = function () {
  if (window.pageYOffset > 500) {
    upButton.classList.add('shown');
  } else {upButton.classList.remove('shown');}
};

upButton.onclick = function () {
    window.scrollTo({top: 0, behavior: 'smooth'});
};
