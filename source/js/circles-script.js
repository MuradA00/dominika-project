const circles = document.querySelectorAll('.services__row-item');

circles.forEach(circle => {
  circle.addEventListener('click', function() {
    circles.forEach(block => block.classList.remove('active-circle'))
    this.classList.toggle('active-circle')
  })
})
