const btnToggle = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');
const userNav = document.querySelector('.user-nav');
const accordion = document.querySelectorAll('.footer-img');
const exploreBtn = document.querySelector('.sellers-btn');
const sellers = document.querySelector('.sellers__inner');

btnToggle.addEventListener('click', () => {
    menu.classList.toggle('menu--active');
    userNav.classList.toggle('menu--active');
});

exploreBtn.addEventListener('click', (event) => {
    event.preventDefault();
    sellers.classList.toggle('active');
});

accordion.forEach(item => (item.addEventListener('click', () => {
    if (item.getAttribute('src')=='img/accordion-icon-reverse.svg') {
        item.setAttribute('src', 'img/accordion-icon.svg');
    } else {
        item.setAttribute('src', 'img/accordion-icon-reverse.svg');
    }
    item.parentNode.parentNode.classList.toggle('active');
})));