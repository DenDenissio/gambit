const swiper = new Swiper('.image-slider', {

  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 2.3,
      spaceBetween: 20
    },
    },
    navigation: {
        nextEl: '.nav_toggle_right',
        prevEl: '.nav_toggle_left'
    },
})

const swiperShop = new Swiper('.image-slider-shop', {

  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 5,
      spaceBetween: 20
    },
    },
    navigation: {
        nextEl: '.nav_toggle_shop_right',
        prevEl: '.nav_toggle_shop_left'
    },
})