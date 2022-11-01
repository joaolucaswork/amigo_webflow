/* eslint-disable no-unused-vars */
import Swiper from 'swiper'
import 'swiper/css'

function carroselDepoimentos() {
  let photoSwiper = new Swiper('.swiper.is-depoimentos', {
    spaceBetween: 32,
    grabCursor: true,
    //effect: 'fade',
    //  fadeEffect: {
    //  crossFade: true
    //},
    // loop: true,
    keyboard: true,
    // Navigation arrows
    navigation: {
      nextEl: '.arrow.is-right',
      prevEl: '.arrow.is-left',
    },
  })
}

export default carroselDepoimentos
