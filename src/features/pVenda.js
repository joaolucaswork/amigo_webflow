/* eslint-disable no-inner-declarations */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { Flip } from 'gsap/Flip'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, Flip)

export function pVenda() {
  $(function () {
    if ($('body').is('.p-venda')) {
      // LENIS CODE
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 1,
        infinite: false,
      })
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)

      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault()
          lenis.scrollTo(this.getAttribute('href'))
        })
      })

      let tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: '.section_pre-venda-hero',
          start: 'top center',
          //  scrub: true,
          end: 'bottom top',
        },
      })
      tl1.to(
        '.item-imposto',
        {
          y: '0rem',
          autoAlpha: 1,
          stagger: { each: 0.2 },
          ease: 'power3.out',
          duration: 0.7,
        },
        0
      )
      tl1.to(
        '.iphone-mockup-pvendas',
        {
          y: '12.7rem',
          ease: 'Strong.easeInOut',
          duration: 1,
        },
        0
      )
      tl1.to(
        '.iphone14-tela.contabilidade-screen',
        {
          y: '0rem',
          ease: 'Strong.easeInOut',
          duration: 1.9,
        },
        0
      )
      tl1.to(
        '.image-ilustration-pvendas_imagem',
        {
          scale: 1,
          autoAlpha: 1,
          stagger: { each: 0.2 },
          ease: 'power4.out',
          duration: 2,
        },
        0
      )

      tl1.to(
        '.circle-banner-desconto--pvenda.liberado',
        {
          scale: 1,
          ease: 'power4.out',
          duration: 2,
        },
        0.2
      )

      $('.section_pre-venda-hero').each(function (index) {
        let triggerElement = $(this)
        let targetElement = $('.image-ilustration-pvendas')

        let tl3 = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            // trigger element - viewport
            start: 'top center',
            end: 'bottom top',
            scrub: true,
            ease: 'none',
          },
        })
        tl3.from(
          targetElement,
          {
            y: '-5rem',
            duration: 1,
            stagger: { each: 0.2 },

            delay: 0.5,
          },
          0
        )
        tl3.from(
          '.iphone14-tela.contabilidade-screen',
          {
            y: '3rem',
            duration: 1,
            delay: 0.5,
          },
          0
        )
      })

      ScrollTrigger.batch('.pq-ser-amigo-item_wrapper', {
        // interval: 0.1, // time window (in seconds) for batching to occur.
        // batchMax: 3,   // maximum batch size (targets)
        onEnter: (batch) =>
          gsap.to(batch, { autoAlpha: 1, y: 0, stagger: 0.2 }),
        // also onLeave, onEnterBack, and onLeaveBack
        // also most normal ScrollTrigger values like start, end, etc.
      })

      let navEl = $('.amigo-exp-navbar')
      let formSectionEl = $('.section_form-amigo-exp')

      window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY
        var scrollPercentage =
          (scrollPosition / (document.body.scrollHeight - window.innerHeight)) *
          100
        if (scrollPercentage >= 10 && !formSectionEl.hasClass('active')) {
          navEl.removeClass('hide-nav')
        } else {
          navEl.addClass('hide-nav')
        }
      })

      formSectionEl.each(function (index) {
        ScrollTrigger.create({
          trigger: $(this),
          start: 'top center',
          end: 'bottom top',
          onToggle: ({ self, isActive }) => {
            if (isActive) {
              navEl.addClass('hide-nav')
              formSectionEl.addClass('active')
            } else {
              navEl.removeClass('hide-nav')
              formSectionEl.removeClass('active')
            }
          },
        })
      })
    }
  })
}
