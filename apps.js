const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", Menu);

function Menu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
