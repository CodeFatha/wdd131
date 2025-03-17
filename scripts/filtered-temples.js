const element = document.querySelector("#date-placeholder");
const year = document.querySelector(".year");
const heading = document.querySelector(".heading");
const mainnav = document.querySelector(".links");
const hamburger = document.querySelector("#menu");
const container = document.querySelector('.temples');
const linkOld = document.querySelector('#old');
const linkNew = document.querySelector('#new');
const linkLarge = document.querySelector('#large');
const linkSmall = document.querySelector('#small');
const linkHome = document.querySelector('#home');
const today = new Date();
let filtered = [];

year.innerHTML = `\u00A9 ${today.getFullYear()}`;
element.innerHTML = `Last modified: ${document.lastModified}`;

hamburger.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hamburger.classList.toggle('show');
  heading.classList.toggle('show');
});

let temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Kirtland",
      location: "Ohio, USA",
      dedicated: "1836, March, 27",
      area: 15000,
      imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/kirtland-temple/kirtland-temple-1171.jpg"
    },
    {
      templeName: "Durban South Africa",
      location: "KwaZulu Natal, South Africa",
      dedicated: "2020, February, 16",
      area: 19860,
      imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/durban-south-africa-temple/durban-south-africa-temple-35781.jpg"
    },
    {
      templeName: "Colonia Juárez Mexico",
      location: "Chihuahua, Mexico",
      dedicated: "1999, March, 7",
      area: 6800,
      imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/colonia-juarez-chihuahua-mexico-temple/colonia-juarez-chihuahua-mexico-temple-35520.jpg"
    }
  ]
  
linkOld.addEventListener('click', getOldTemples);
linkNew.addEventListener('click', getNewTemples);
linkLarge.addEventListener('click', getLargeTemples);
linkSmall.addEventListener('click', getSmallTemples);
linkHome.addEventListener('click', getAllTemples);

const caption = document.createElement('ul');
caption.className = 'caption';
function renderArray(temples) {
  caption.innerHTML = '';
  temples.forEach(temple => {
    const card = document.createElement('div');
    card.className = 'card';
    
    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = 'lazy';
    img.referrerPolicy = 'no-referrer';
    img.width = 300;
    img.height = 200;
    img.style.objectFit = 'cover';

    const item = document.createElement('li');
    const name = document.createElement('p');
    name.className = 'name';
    const location = document.createElement('p');
    const dedicated = document.createElement('p');
    const size = document.createElement('p');
    name.textContent = temple.templeName;
    location.textContent = `Location: ${temple.location}`;
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;
    size.textContent = `Size: ${temple.area.toLocaleString()} sq ft`;

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(size);
    card.appendChild(img);

    item.appendChild(card);
    caption.appendChild(item);
  });
  container.appendChild(caption);
}

renderArray(temples)

function getOldTemples()
{
  filtered = [];
  filtered = temples.filter(temple => {
    const year = new Date(temple.dedicated).getFullYear();
    return year < 1900;
  });
  renderArray(filtered);
}


function getNewTemples()
{
  filtered = [];
  filtered = temples.filter(temple => {
    const year = new Date(temple.dedicated).getFullYear();
    return year > 2000 || year === 'N/A';
  });
  renderArray(filtered);
}

function getLargeTemples()
{
  filtered = [];
  filtered = temples.filter(temple => temple.area >= 90000);
  renderArray(filtered);
}

function getSmallTemples()
{
  filtered = [];
  filtered = temples.filter(temple => temple.area < 10000);
  renderArray(filtered);
}

function getAllTemples()
{
  renderArray(temples);
}