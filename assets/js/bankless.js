function toggleDarkMode() {
  const wasDarkmode = localStorage.getItem("darkmode") === "true";
  localStorage.setItem("darkmode", !wasDarkmode);

  document.querySelector("#sun").classList.toggle("active");
  document.querySelector("#moon").classList.toggle("active");
  document.documentElement.classList.toggle("dark-mode");

  // Ugly hack for merch page
  if (
    [
      "https://www.bankless.se/merch/",
      "https://www.bankless.se/t-shirt/",
      "https://www.bankless.se/keps/",
      "https://www.bankless.se/hoodie/",
    ].includes(document.location.href)
  ) {
    location.reload();
  }
}
