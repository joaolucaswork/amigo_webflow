/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import gsap from 'gsap'

import { animationsFunction } from './features_amigo-contabil/animationsFunction'
import { extraNavbarFunction } from './features_amigo-contabil/extraNavbarFunction'
import { formFunction } from './features_amigo-contabil/formFunction'
import { strickTrickFunction } from './features_amigo-contabil/stickTrickFunction'
import { tabelaFunction } from './features_amigo-contabil/tabelaFunction'

export function amigoContabil() {
  $(function () {
    if ($('body').is('.amigo-contabil')) {
      $('.open-faq-button').on('click', function (e) {
        $('.accordion-clinica-servicos').click()
        return false
      })

      extraNavbarFunction()
      formFunction()
      tabelaFunction()
      strickTrickFunction()
      animationsFunction()

      document
        .querySelectorAll('.accordion-clinica-servicos')
        .forEach((trigger) => {
          trigger.addEventListener('click', function () {
            this.x = ((this.x || 0) + 1) % 2
            if (this.x) {
              this.querySelectorAll('.accordion-content-tudo-clinica').forEach(
                (target) => target.classList.add('aberto')
              )
            } else {
              this.querySelectorAll('.accordion-content-tudo-clinica').forEach(
                (target) => target.classList.remove('aberto')
              )
            }
          })
        })
    }
  })
}
