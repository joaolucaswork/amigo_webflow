/* eslint-disable no-dupe-class-members */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import counterUp from 'counterup2'
import gsap from 'gsap'
import { Observer } from 'gsap/Observer'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

//import imagesloaded from 'imagesloaded'

export function homeAnimations() {
  gsap.config({ nullTargetWarn: false })
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
    tl1.to(
      '.stagger-up',
      {
        autoAlpha: 1,
        y: '0px',
        stagger: { each: 0.2, from: 'start' },
        ease: 'power2.out',
        duration: 0.4,
      },
      0.3
    )
    tl1.to(
      '.stagger-left',
      {
        autoAlpha: 1,
        x: '0px',
        stagger: { each: 0.2, from: 'start' },
        ease: 'power2.out',
        duration: 0.5,
      },
      0.4
    )
    tl1.to(
      '.nota-app_wrapper',
      {
        autoAlpha: 1,
        x: '0px',
        stagger: { each: 0.2, from: 'start' },
        ease: 'Strong.easeInOut',
        duration: 0.5,
      },
      0.4
    )
    tl1.to(
      '.section-home-banner',
      {
        autoAlpha: 1,
        y: '0px',
        //stagger: { each: 0.2, from: 'start' },
        ease: 'power2.out',
        duration: 0.4,
      },
      0
    )
  }
  heroAnimation()

  // Scroll into view
  function solucoesAnimation() {
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.home-crescimento_component',
        start: 'top bottom',
        end: 'bottom top',
      },
    })

    tl2.to(
      '.text-animation-2',
      {
        autoAlpha: 1,
        ease: 'Strong.easeInOut',
        stagger: { each: 0.1, from: 'start' },
        duration: 0.5,
      },
      0
    )

    tl2.to(
      '.stagger-up-2',
      {
        autoAlpha: 1,
        y: '0px',
        stagger: { each: 0.2, from: 'start' },
        ease: 'power2.out',
        duration: 0.4,
      },
      0.2
    )
  }
  solucoesAnimation()

  // Scroll into view
  function pqescolherAnimation() {
    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-home-solucoes',
        start: 'top bottom',
        end: 'bottom top',
      },
    })

    tl3.to(
      '.text-animation-3',
      {
        autoAlpha: 1,
        ease: 'Strong.easeInOut',
        stagger: { each: 0.1, from: 'start' },
        duration: 0.5,
      },
      0
    )
    tl3.to(
      '.stagger-left-2',
      {
        autoAlpha: 1,
        x: '0px',
        stagger: { each: 0.2, from: 'start' },
        ease: 'power2.out',
        duration: 0.5,
      },
      0.4
    )

    tl3.to(
      '.stagger-up-3',
      {
        autoAlpha: 1,
        y: '0px',
        stagger: { each: 0.2, from: 'start' },
        ease: 'power2.out',
        duration: 0.4,
      },
      0.2
    )
  }
  pqescolherAnimation()

  $(function () {
    if ($('body').is('.homepage')) {
      const el = document.querySelector('.counter')

      // Start counting, do this on DOM ready or with Waypoints.
      counterUp(el, {
        duration: 1000,
        delay: 16,
      })
    }
  })
}
