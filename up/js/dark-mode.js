let checkbox = document.querySelector('input[name="theme"]');

const htmlElement = document.documentElement;

console.log(htmlElement);

//
checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    smoothTrans();
    htmlElement.setAttribute("data-theme", "dark");
  } else {
    smoothTrans();
    htmlElement.setAttribute("data-theme", "light");
  }
});

const smoothTrans = () => {
  htmlElement.classList.add("transition");

  window.setTimeout(() => {
    htmlElement.classList.remove("transition");
  }, 1000);
};
