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
