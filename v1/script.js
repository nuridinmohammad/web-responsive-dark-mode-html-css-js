const lightMode = document.querySelector(".light-mode");
const darkMode = document.querySelector(".dark-mode");

lightMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode-active");
  darkMode.classList.toggle("active");
  lightMode.classList.toggle("active");
});

darkMode.addEventListener("click", () => {
  document.body.classList.remove("dark-mode-active");
  darkMode.classList.remove("active");
  lightMode.classList.remove("active");
});

