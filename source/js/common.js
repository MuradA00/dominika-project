const thankBlock = document.querySelector('.thank');
const closeThankBlock = document.querySelector('.thank__close');
const sendBtn = document.querySelector('.form__send');

const sayThankYou = e => {
  e.preventDefault();
  thankBlock.classList.add('say-thank-u');
  body.classList.add('show-overlay');
  body.classList.add('body-locked');
}

const closeThankYouBlock = () => {
  thankBlock.classList.remove('say-thank-u');
  body.classList.remove('show-overlay');
  body.classList.remove('body-locked');
}

sendBtn.addEventListener('click', sayThankYou);
closeThankBlock.addEventListener('click', closeThankYouBlock);
thankBlock.addEventListener('click', function(e) {
 if (e.target.matches('.thank')) {
  closeThankYouBlock()
 } else return;
})


AOS.init({
  once: true,
  duration: 600,
  offset: 130
})

$(document).ready(function() {
  $("a.scrollLink").click(function(event) {
      event.preventDefault();
      $("html, body").animate({
          scrollTop: $($(this).attr("href")).offset().top
        }, 500);
    });
});

