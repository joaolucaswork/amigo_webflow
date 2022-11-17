/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import gsap from 'gsap'
import { Observer } from 'gsap/Observer'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function amigoClinic() {
  $('.section-plataforma-inteligente').each(function (index) {
    let triggerElement = $(this)
    // let targetElement = $(".mm-item-1");

    let tl0 = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: 'center center',
        immediateRender: false,
        pin: true,
        //  AnticipatePin:1,
        end: '+=900 center',
        // markers: true,
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

  // Grid Title Change
  $('.number-plataforma').eq(0).addClass('is--active')
  $('.copy-text').each(function (index) {
    let triggerElement = $(this)
    let myIndex = $(this).index()
    let targetElement = $('.number-plataforma').eq(myIndex)
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: 'center 20%',
        end: 'center 90%',
        scrub: 1,
        immediateRender: false,
        markers: true,
        // toggleActions: 'restart pause resume reset',

        // pin: true,
        onEnter: () => {
          $('.number-plataforma').removeClass('is--active')
          targetElement.addClass('is--active')
        },
        onEnterBack: () => {
          $('.number-plataforma').removeClass('is--active')
          targetElement.addClass('is--active')
        },
      },
    })
  })
}
