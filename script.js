// Obtener los botones del menú
const buttons = document.querySelectorAll('nav button');

// Obtener las páginas del CV
const pages = document.querySelectorAll('.page');

// Función para mostrar una página y ocultar las demás
function showPage(pageIndex) {
  pages.forEach((page, index) => {
    if (index === pageIndex) {
      page.style.display = 'block';
    } else {
      page.style.display = 'none';
    }
  });
}

// Mostrar la primera página por defecto
showPage(0);

// Agregar un manejador de eventos a cada botón del menú
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    showPage(index);
  });
});