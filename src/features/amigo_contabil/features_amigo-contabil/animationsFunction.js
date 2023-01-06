/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function animationsFunction() {
  $('.section-recem-formado-hero').each(function (index) {
    let triggerElement = $(this)
    // let targetElement = $(".mm-item-1");

    let tl0 = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: 'top 200',
        immediateRender: false,
        //    pin: true,
        //  AnticipatePin:1,
        end: 'bottom top',
        // fastScrollEnd:false,
        // pinSpacing: true,
        scrub: 1,
      },
    })

    tl0.to(
      '.texto-contabilidade-rotate',
      {
        rotate: 0,
        opacity: 1,
        // delay:0.40,
        ease: 'power4.out',
        duration: 0.2,
      },
      0
    )
  })
}
