let darkMode = false;
let isMenuOpen = false;

window.onload = function () {
  const savedDarkMode = localStorage.getItem("darkMode");

  if (savedDarkMode === "true") {
    darkMode = true;
    document.body.classList.add("dark-mode");
    updateThemeIcon();
  } else {
    darkMode = false;
    updateThemeIcon();
  }
};

function toggleTheme() {
  darkMode = !darkMode;
  document.body.classList.toggle("dark-mode");

  // Guardar el estado en localStorage
  localStorage.setItem("darkMode", darkMode);
  updateThemeIcon();

  // Si el menú está abierto, también cambiar el estado del menú
  if (isMenuOpen) {
    const menu = document.getElementById("menu");
    if (darkMode) {
      menu.classList.remove("menu-open");
      menu.classList.add("menu-open-darkmode");
    } else {
      menu.classList.remove("menu-open-darkmode");
      menu.classList.add("menu-open");
    }
  }
}

function updateThemeIcon() {
  const themeIconImg = document.getElementById("theme-icon-img");

  if (darkMode) {
    themeIconImg.src = "/assets/logos/soleado.png";
    themeIconImg.alt = "dark-mode-icon";
    themeIconImg.width = 25;
    themeIconImg.height = 25;
  } else {
    themeIconImg.src = "https://img.icons8.com/ios-filled/50/do-not-disturb-2.png";
    themeIconImg.alt = "light-mode-icon";
    themeIconImg.width = 18;
    themeIconImg.height = 18;
  }
}

function toggleMenu() {
  const menu = document.getElementById("menu");
  isMenuOpen = !isMenuOpen;

  // Si darkMode está activo, utiliza la clase para el modo oscuro
  if (darkMode) {
    menu.classList.toggle("menu-open-darkmode");
  } else {
    menu.classList.toggle("menu-open");
  }
}
