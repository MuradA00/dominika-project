const homeImg = document.querySelector('.home__image img')
const homePi = document.querySelector('.home__image source');
const src = 'img/home/home-image-mob.png';

if (window.matchMedia("(max-width: 700px)").matches) {
  homeImg.src = src;
  homePi.srcset = src;
}
