/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Swiper from 'swiper'
import 'swiper/css'

export function amigoOne() {
  // Swiper - Extra Step - add arrows and pagination html markup by code (Append)

  // eslint-disable-next-line no-unused-vars
  let Depoimentos = new Swiper('.swiper.is-depoimentos-min', {
    spaceBetween: 32,
    slidesPerView: 3,
    grabCursor: true,
    //effect: 'fade',
    //  fadeEffect: {
    //  crossFade: true
    //},
    loop: true,
    keyboard: true,
    // Navigation arrows
    navigation: {
      nextEl: '.arrow.is-right.dep-min',
      prevEl: '.arrow.is-left.dep-min',
    },
  })
}
