/* eslint-disable no-undef */

import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

export function tabelaFunction() {
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.mostrar-mais-buton-area').forEach((trigger) => {
      trigger.addEventListener('click', function () {
        this.x = ((this.x || 0) + 1) % 2
        if (this.x) {
          document
            .querySelectorAll('.starter-tabela-content-mobile_wrapper')
            // Remover classe e abrir tabela
            .forEach((target) => target.classList.remove('closed-table'))
        } else {
          document
            .querySelectorAll('.starter-tabela-content-mobile_wrapper')
            // Adicionar classe e fechar tabela
            .forEach((target) => target.classList.add('closed-table'))
          gsap.to(window, {
            duration: 0.5,
            scrollTo: '.nossos-planos-profissionais-mobile-top_wrapper',
          })
        }
      })
    })
  })
}
