const sliderContainer = document.querySelector(".comments__slider");
const arrowRight = document.querySelector(".comments__slider--arrows__right");
const arrowLeft = document.querySelector(".comments__slider--arrows__left");
const arrowsContainer = document.querySelector(".comments__slider--arrows");
const slides = document.querySelectorAll(".comments__slider--slide");

let currentSlide = 0;
let maxSlide = slides.length;
slides.forEach((s, i) => {
  s.style.transform = `translateX(${100 * i}%)`;
});

arrowRight.addEventListener("click", () => {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide += 1;
  }

  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (currentSlide - i)}%)`;
  });

  for (const s of slides) {
    s.classList.remove("comments__slider--slide__active");
  }
  slides[currentSlide].classList.add("comments__slider--slide__active");
});
arrowLeft.addEventListener("click", () => {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }

  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (currentSlide - i)}%)`;
  });
  for (const s of slides) {
    s.classList.remove("comments__slider--slide__active");
  }
  slides[currentSlide].classList.add("comments__slider--slide__active");
});
