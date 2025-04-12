const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const banner = document.querySelector('.banner');

hamburger.addEventListener('click', toggleMenu);

function toggleMenu() {
    hamburger.classList.toggle('show');
    menu.classList.toggle('show');
    banner.classList.toggle('show');
}