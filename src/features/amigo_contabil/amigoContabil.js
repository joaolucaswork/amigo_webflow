/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import gsap from 'gsap'
import stickybits from 'stickybits'

import { extraNavbarFunction } from './features_amigo-contabil/extraNavbarFunction'
import { formFunction } from './features_amigo-contabil/formFunction'
import { tabelaFunction } from './features_amigo-contabil/tabelaFunction'

export function amigoContabil() {
  $(function () {
    if ($('body').is('.amigo-contabil')) {
      $(function () {
        stickybits('.nossos-planos-profissionais-top_wrapper', {
          stickyBitStickyOffset: 0,
        })
      })

      $('.open-faq-button').on('click', function (e) {
        $('.accordion').click()
        return false
      })

      extraNavbarFunction()
      formFunction()
      tabelaFunction()
    }
  })
}
