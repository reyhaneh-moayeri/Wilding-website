const hamburgerMenu = document.querySelector(".header__menu");
const nav = document.querySelector(".header__nav");
const header = document.querySelector(".header");
const overlay = document.querySelector(".header__overlay");

hamburgerMenu.addEventListener("click", () => {
  header.classList.toggle("open");
  overlay.classList.toggle("open");
});

const closeMenu = function (e) {
  header.classList.remove("open");
  overlay.classList.remove("open");
};

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenu();
  }
});

overlay.addEventListener("click", closeMenu);
