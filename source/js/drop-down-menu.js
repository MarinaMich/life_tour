const menuMain = document.querySelector('.menu');
const menuToggle = document.querySelector('.menu__toggle');
const body = document.querySelector('.page-body');
const menuList = document.querySelector('.menu__list');
const links = Array.from(menuList.querySelectorAll('.menu__item a'));

menuToggle.addEventListener('click', () => {
  if (menuMain.classList.contains('menu--closed')) {
    menuMain.classList.remove('menu--closed');
    menuMain.classList.add('menu--opened');
    body.style.overflow = 'hidden';
  } else {
    menuMain.classList.add('menu--closed');
    menuMain.classList.remove('menu--opened');
    body.style.overflow = 'auto';
  }
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    menuMain.classList.add('menu--closed');
    menuMain.classList.remove('menu--opened');
    body.style.overflow = 'auto';
  });
});
