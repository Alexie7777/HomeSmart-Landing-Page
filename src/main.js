import "./style.css";

const navBtn = document.getElementById("menu");
const menuBar = document.querySelector('[role="menubar"]');
const darkToggle = document.getElementById("theme-toggle");

navBtn.addEventListener("click", () => {
  // const isExpanded =
  const isExpanded = JSON.parse(navBtn.getAttribute("aria-expanded"));
  navBtn.setAttribute("aria-expanded", !isExpanded);
  menuBar.classList.toggle("hidden");
  menuBar.classList.toggle("flex");
});

darkToggle.addEventListener("click", () => {
  const theme = localStorage.getItem("color-theme");
  const toggleDarkMode = document.documentElement.classList.toggle("dark");
  if (theme == "dark") {
    toggleDarkMode;
    localStorage.setItem("color-theme", "light");
  }
  if (theme == "light") {
    toggleDarkMode;
    localStorage.setItem("color-theme", "dark");
  }
});
