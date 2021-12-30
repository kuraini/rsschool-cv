let nav = document.querySelector('.nav');
let navToggle = document.querySelector('.nav-toggle');
let navLinks = document.querySelectorAll('.nav-link');

const toggleMenu = function() {
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
  } else {
    nav.classList.add('nav--closed');
    nav.classList.remove('nav--opened');
  }
}

navToggle.addEventListener('click', toggleMenu);

navLinks.forEach(function(item) {
  item.addEventListener('click', toggleMenu);
});