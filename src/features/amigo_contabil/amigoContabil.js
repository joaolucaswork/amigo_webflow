/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import gsap from 'gsap'

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
    }
  })
}
