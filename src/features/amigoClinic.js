/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import gsap from 'gsap'
import { Observer } from 'gsap/Observer'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function amigoClinic() {
  $(function () {
    if ($('body').is('.amigo-clinic')) {
      let trigger = '.copy-text'
      let visual = '.number-plataforma'
      let section = '.section-plataforma-inteligente'

      $('.section-plataforma-inteligente').each(function (index) {
        let triggerElement = $(this)
        // let targetElement = $(".mm-item-1");

        let tl0 = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            // trigger element - viewport
            start: 'center 35%',
            immediateRender: false,
            pin: true,
            //  AnticipatePin:1,
            end: '+=900 center',
            markers: true,
            preventOverlaps: false,
            fastScrollEnd: false,
            // pinSpacing: true,
            scrub: 1,
          },
        })

        tl0.to(
          '.max-width-plataforma-copy',
          {
            y: -450,
            opacity: 1,
            // delay:0.40,
            ease: 'none',
            // duration: 1,
          },
          0
        )
      })
      // On page load
      $(section).each(function (index) {
        $(this).find(trigger).first().addClass('active')
        $(this).find(visual).first().addClass('active')
      })

      // On scroll into view
      $(trigger).each(function (index) {
        let myIndex = $(this).index()
        let mySection = $(this).closest(section)
        let targetElement = mySection.find(visual).eq(myIndex)
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: $(this),
            // trigger element - viewport
            start: 'top -150%',
            end: 'bottom center',
            onEnter: () => {
              mySection.find('.active').removeClass('active')
              $(this).addClass('active')
              targetElement.addClass('active')
            },
            onEnterBack: () => {
              mySection.find('.active').removeClass('active')
              $(this).addClass('active')
              targetElement.addClass('active')
            },
          },
        })
      })
    }
  })
}
