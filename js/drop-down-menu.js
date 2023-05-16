const dropDown = document.querySelector("[data-open]");
const dropDownMenu = document.querySelector(".services-sub-list");

dropDown.addEventListener("click", toggleMenu);

function toggleMenu() {
  dropDownMenu.classList.toggle("visually-hidden");
}
