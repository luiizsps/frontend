// set current year
const yearEl = document.querySelector(".year");
console.log(yearEl);
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = documen.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
