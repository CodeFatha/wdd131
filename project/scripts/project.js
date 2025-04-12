const hamburger = document.querySelector('#menu');
const nav = document.querySelector('.navigation');
const logo = document.querySelector('.brand');
const searchTerm = document.getElementById('search');
const element = document.querySelector("#date-placeholder");
const year = document.querySelector(".year");
const nullRes = document.querySelector('#no-result');
let cars = document.querySelector('.cars');
const today = new Date();


year.innerHTML = `\u00A9 ${today.getFullYear()}`;
element.innerHTML = `Last modified: ${document.lastModified}`;

hamburger.addEventListener('click', toggleMenu);

function toggleMenu() {
    hamburger.classList.toggle('show');
    logo.classList.toggle('show');
    nav.classList.toggle('show');
}

let vehicles = [
    {
        'id': 1,
        'make': 'Mercedes Benz',
        'model': 'GLE 4Matic',
        'year': '2020',
        'imageUrl': 'images/gle 4Matic.jpg'
    },
    {
        'id': 2,
        'make': 'Audi',
        'model': 'Q5',
        'year': '2023',
        'imageUrl': 'images/Q5.jpg'
    },
    {
        'id': 3,
        'make': 'Proton',
        'model': 'XE Edition',
        'year': '2024',
        'imageUrl': 'images/proton.jpg'
    },
    {
        'id': 4,
        'make': 'Omoda',
        'model': 'Reachy X5',
        'year': '2022',
        'imageUrl': 'images/omoda.jpg'
    },
    {
        'id': 5,
        'make': 'KIA',
        'model': 'SONET',
        'year': '2018',
        'imageUrl': 'images/Sonet.jpg'
    },
    {
        'id': 6,
        'make': 'Jeep',
        'model': 'Renegade',
        'year': '2024',
        'imageUrl': 'images/renegade.jpg'
    },
]

loadCars(vehicles);

function loadCars(vehicles) {
    cars.innerHTML = '';
    vehicles.forEach(vehicle => {
        const anchor  = document.createElement('a');
        anchor.href = `details.html?id=${vehicle.id}`;
        const picture = document.createElement('picture');
        picture.className = 'frame';
        const image = document.createElement('img');
        image.width = 280;
        image.src = vehicle.imageUrl;
        image.loading = 'lazy';
        image.alt = `${vehicle.make} | ${vehicle.model}`;
        const caption = document.createElement('caption');
        caption.color = 'red';
        caption.textContent = `${vehicle.make} | ${vehicle.model} | ${vehicle.year}`

        picture.appendChild(image);
        picture.appendChild(caption);
        anchor.appendChild(picture);

        cars.appendChild(anchor);
        localStorage.setItem(`${vehicle.id}`, JSON.stringify(vehicle))
    });
}

function filter() {
    const term = searchTerm.value.toLowerCase();
    filetered = vehicles.filter(vehicle =>
        vehicle.make.toLowerCase().includes(term) || vehicle.year >= term || vehicle.model.toLowerCase().includes(term)
    );
    
    loadCars(filetered);

    if (filetered.length == 0) {
        nullRes.textContent = `Sorry, no cars match "${term}".`;
    } else {
        nullRes.textContent = '';
    }
    
}
