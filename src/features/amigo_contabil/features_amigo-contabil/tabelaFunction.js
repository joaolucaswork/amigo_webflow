/* eslint-disable no-undef */

import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

export function tabelaFunction() {
  $('.mostrar-mais-buton-area').on('click', function () {
    $('.starter-tabela-content-mobile_wrapper').toggleClass('closed-table')
    $('.mostrar-mais-button').toggleClass('full-size')
    gsap.to(window, {
      duration: 0.5,
      scrollTo: '.starter-tabela-content-mobile_wrapper',
    })
  })
}
