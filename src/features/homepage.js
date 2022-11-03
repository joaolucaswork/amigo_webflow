/* eslint-disable no-dupe-class-members */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import gsap from 'gsap'
import { Observer } from 'gsap/Observer'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
//import imagesloaded from 'imagesloaded'

export function homeAnimations() {
  gsap.registerPlugin(ScrollTrigger)

  // Scroll into view
  function heroAnimation() {
    let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-home-hero',
        start: 'top center',
        end: 'bottom top',
      },
    })

    tl1.to(
      '.image-hero',
      {
        scale: 1,
        opacity: 1,
        ease: 'power4.out',
        duration: 1,
      },
      0
    )
  }
  heroAnimation()
}
