const desplegables = document.querySelectorAll('.desplegable');

desplegables.forEach(item => {
  const header = item.querySelector('.desplegable-header');
  const arrow = item.querySelector('.arrow');

  header.addEventListener('click', () => {
    // Cerrar todos los demás
    desplegables.forEach(otro => {
      if (otro !== item) {
        otro.classList.remove('activo');
        otro.querySelector('.arrow').textContent = '+'
      }
    });

    // Alternar el seleccionado
    const activo = item.classList.toggle('activo')
    arrow.textContent = activo ? '-' : '+';
  });
});
