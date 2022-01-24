function toggleDarkMode() {
  document.querySelector("#sun").classList.toggle("active");
  document.querySelector("#moon").classList.toggle("active");
  document.documentElement.classList.toggle("dark-mode");
}
