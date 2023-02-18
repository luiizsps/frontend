const yearEl = document.querySelectorAll(".year");
console.log(yearEl);
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
