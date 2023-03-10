const circles = document.querySelectorAll('.services__row-item');

circles.forEach(circle => {
  circles[0].classList.add('active-circle')
  circle.addEventListener('click', function() {
    circles.forEach(block => block.classList.remove('active-circle'))
    this.classList.toggle('active-circle')
  })
})

