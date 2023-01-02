/* eslint-disable no-undef */

import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

export function tabelaFunction() {
  document.querySelectorAll('.mostrar-mais-buton-area').forEach((trigger) => {
    trigger.addEventListener('click', function () {
      this.x = ((this.x || 0) + 1) % 2
      if (this.x) {
        document
          .querySelectorAll('.starter-tabela-content-mobile_wrapper')
          .forEach((target) => target.classList.remove('closed-table'))
        $('.mostrar-mais-button').addClass('full-size')
      } else {
        document
          .querySelectorAll('.starter-tabela-content-mobile_wrapper')
          .forEach((target) => target.classList.add('closed-table'))
        gsap.to(window, {
          duration: 0.5,
          scrollTo: '.starter-tabela-content-mobile_wrapper',
        })
        $('.mostrar-mais-button').removeClass('full-size')
      }
    })
  })
}
