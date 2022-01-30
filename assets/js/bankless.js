function toggleDarkMode() {
  const wasDarkmode = localStorage.getItem('darkmode') === 'true';
  localStorage.setItem('darkmode', !wasDarkmode);

  document.querySelector("#sun").classList.toggle("active");
  document.querySelector("#moon").classList.toggle("active");
  document.documentElement.classList.toggle("dark-mode");
}
