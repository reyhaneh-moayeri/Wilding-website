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

const navHeight = nav.getBoundingClientRect().height;
const stickyNav = (entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (!entry.isIntersecting) nav.classList.add("sticky");
    else nav.classList.remove("sticky");
  });
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `${navHeight}px`,
});

headerObserver.observe(header);
