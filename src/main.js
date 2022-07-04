import "./style.css";

const navBtn = document.getElementById("menu");
const menuBar = document.querySelector('[role="menubar"]');

navBtn.addEventListener("click", () => {
  // const isExpanded =
  const isExpanded = JSON.parse(navBtn.getAttribute("aria-expanded"));
  navBtn.setAttribute("aria-expanded", !isExpanded);
  menuBar.classList.toggle("hidden");
  menuBar.classList.toggle("flex");
});
