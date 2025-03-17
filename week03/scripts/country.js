const element = document.querySelector("#date-placeholder");
const year = document.querySelector(".year");
const today = new Date();
const list = document.querySelectorAll('.weather-data li');
const temp = list[0];
const windSpeed = list[1];

year.innerHTML = `\u00A9 ${today.getFullYear()}`;
tempC = parseInt(temp.textContent.split(' ')[1], 10);
windS = parseInt(windSpeed.textContent.split(' ')[2], 10);
element.innerHTML = `Last modified: ${document.lastModified} | Wind chill (for ${tempC}℃ and ${windS}km ): ${calculateWindChill(tempC, windS)}℃`;

function calculateWindChill(temp, wind) {
    if (temp <= 10 || wind >= 4.8) {
        const windChill = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16));
        return Math.round(windChill * 10) / 10;
    }

    return temp;
}