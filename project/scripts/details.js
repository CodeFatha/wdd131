const hamburger = document.querySelector('#menu');
const nav = document.querySelector('.navigation');
const logo = document.querySelector('.brand');
const image = document.getElementById('car-image');
const carName = document.getElementById('car-name');
const title = document.getElementById('title');
const element = document.querySelector("#date-placeholder");
const form = document.getElementById("booking");
const year = document.querySelector(".year");
const today = new Date();
const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get("id");
const car = JSON.parse(localStorage.getItem(id));

year.innerHTML = `\u00A9 ${today.getFullYear()}`;
element.innerHTML = `Last modified: ${document.lastModified}`;

hamburger.addEventListener('click', toggleMenu);

form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    console.log(form);
    const formData = new FormData(form);
    let data = {
        'name': formData.get('name'),
        'surname': formData.get('surname'),
        'email': formData.get('email'),
        'car': `${car.make}, ${car.model}`,
        'date': formData.get('date')
    }
    localStorage.setItem('form-data', JSON.stringify(data));
    window.location.href = 'confirmation.html'
  });

function toggleMenu() {
    hamburger.classList.toggle('show');
    logo.classList.toggle('show');
    nav.classList.toggle('show');
}

image.src = car.imageUrl;
image.style.objectFit = 'fill';
image.style.width = '100%';
image.style.maxWidth = '30rem'
title.textContent = `${car.model} | ${car.year}`;
carName.textContent = `Booking: ${car.make} ${car.model}`

function getDetails()
{

}


