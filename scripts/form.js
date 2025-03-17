const element = document.querySelector("#date-placeholder");
const year = document.querySelector(".year");
const heading = document.querySelector(".heading");
const mainnav = document.querySelector(".links");
const hamburger = document.querySelector("#menu");
const select = document.querySelector('#product-select');
const submit = document.querySelector('#submit');
let count = localStorage.getItem('count');

const today = new Date();

year.innerHTML = `\u00A9 ${today.getFullYear()}`;
element.innerHTML = `Last modified: ${document.lastModified}`;


const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

addProducts();
submit.addEventListener('click', () => {
    count++;
    localStorage.setItem('count', count);
});

function addProducts()
{
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        select.appendChild(option);
    });
}