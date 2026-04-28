// Mostrar u ocultar el botón al hacer scroll
window.onscroll = function() {
  const button = document.getElementById("toTop");
  if (document.documentElement.scrollTop > 300) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};

// Volver arriba suavemente
document.getElementById("toTop").onclick = function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Menú hamburguesa
function toggleMenu() {
  const menu = document.querySelector(".navbar ul");
  menu.classList.toggle("active");
}
