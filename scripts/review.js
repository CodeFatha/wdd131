const counter = document.querySelector('.counter');
let count = localStorage.getItem('count');

counter.innerHTML = `Submitted ${count} time(s)`;