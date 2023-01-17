/* eslint-disable no-undef */

import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

export function tabelaFunction() {
  $('.mostrar-mais-buton-area').on('click', function () {
    gsap.to(window, {
      duration: 0.5,
      scrollTo: '.visual-element-tabela',
    })
  })
  $('.pro-mostrar-mais-buton-area').on('click', function () {
    gsap.to(window, {
      duration: 0.5,
      scrollTo: '.mostrar-mais-button',
    })
  })
}
