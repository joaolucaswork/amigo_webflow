/* eslint-disable no-inner-declarations */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import gsap from 'gsap'
import { Observer } from 'gsap/Observer'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function amigoSenior() {
  $(function () {
    if ($('body').is('.senior')) {
      // Scroll into view
      function aposentadoriaSection() {
        let tl1 = gsap.timeline({
          scrollTrigger: {
            trigger: '.section-passos-aposentadoria',
            start: 'top center',
            end: 'bottom top',
          },
        })

        tl1.to(
          '.circles-bullets-item_wrapper',
          {
            opacity: 1,
            ease: 'Strong.easeInOut',
            duration: 1.2,
          },
          0
        )

        tl1.to(
          '.text-animation',
          {
            autoAlpha: 1,
            ease: 'Strong.easeInOut',
            stagger: { each: 0.1, from: 'start' },
            duration: 0.5,
          },
          0
        )
      }
      aposentadoriaSection()
    }
  })
}
