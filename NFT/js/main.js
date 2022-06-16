const btnToggle = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');
const userNav = document.querySelector('.user-nav');

btnToggle.addEventListener('click', () => {
 menu.classList.toggle('menu--active');
 userNav.classList.toggle('menu--active');
});