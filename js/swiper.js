
const swiper = new Swiper('.swiper', {
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    450: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});



