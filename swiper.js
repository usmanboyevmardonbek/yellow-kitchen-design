const swiper = new Swiper('.mySwiper', {
  slidesPerView: 4,
  spaceBetween: 24,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-1-button-next',
    prevEl: '.swiper-1-button-prev',
  },
  breakpoints: {
    100: { slidesPerView: 1, spaceBetween: 16 },
    768: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 24 },
    1280: { slidesPerView: 4, spaceBetween: 24 },
  }
})

const mySwiper = new Swiper('.specSwiper', {
  loop: true,
  slidesPerView: 8,
  spaceBetween: 30,
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 20
    },
    1440: {
      slidesPerView: 8,
      spaceBetween: 30
    }
  },
  navigation: {
    nextEl: ".swiper-2-button-next",
    prevEl: ".swiper-2-button-prev",
  },
});