const text = document.querySelector('.confirm') 
const data = JSON.parse(localStorage.getItem('form-data'));

text.textContent = `Congrats, ${data.name}! You have booked a ${data.car} on the ${data.date.split('T')[0]} at ${data.date.split('T')[1]}.`