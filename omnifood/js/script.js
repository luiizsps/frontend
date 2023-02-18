const yearEl = document.querySelector("heading-primary");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = currentYear;
