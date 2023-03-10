const circles = document.querySelectorAll('.services__row-item');

circles.forEach(circle => {
  circle.addEventListener('click', () => {
    circle.classList.toggle('active-circle');
  })
})
