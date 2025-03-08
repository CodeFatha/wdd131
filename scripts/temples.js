const element = document.querySelector("#date-placeholder");
const year = document.querySelector(".year");
const heading = document.querySelector(".heading");
const mainnav = document.querySelector(".links");
const hamburger = document.querySelector("#menu");
const today = new Date();


year.innerHTML = `\u00A9 ${today.getFullYear()}`;
element.innerHTML = `Last modified: ${document.lastModified}`;

hamburger.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hamburger.classList.toggle('show');
    heading.classList.toggle('show');
});