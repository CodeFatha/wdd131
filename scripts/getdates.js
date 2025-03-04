const element = document.querySelector("#date-placeholder");
const year = document.querySelector(".year");
const today = new Date();

year.innerHTML = `\u00A9 ${today.getFullYear()}`;
element.innerHTML = `Last modified: ${document.lastModified}`;