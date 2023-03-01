/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LocomotiveScroll from 'locomotive-scroll'

gsap.registerPlugin(ScrollTrigger)

export function amigoExp() {
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector('.locomotive-scroll'),
    smooth: true,
    smartphone: {
      smooth: true,
      breakpoint: 0,
    },
    tablet: {
      smooth: true,
    },
    smoothMobile: 0,
    multiplier: 1.0,
  })

  // Wait 2 seconds then calculate the new page height

  setTimeout(() => {
    locoScroll.on('scroll', ScrollTrigger.update)
  }, 2000)

  ScrollTrigger.scrollerProxy('.locomotive-scroll', {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      }
    },

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector(".smooth-scroll").style.transform
      ? "transform"
      : "fixed"*/
  })

  $('.section_relacao-medico').each(function (index) {
    let childTriggers = $(this).find('.relacao-medico_text-item')
    let childTargets = $(this).find('.relacao-medico_img-item')
    // switch active class
    function makeItemActive(index) {
      childTriggers.removeClass('is-active')
      childTargets.removeClass('is-active')
      childTriggers.eq(index).addClass('is-active')
      childTargets.eq(index).addClass('is-active')
    }
    makeItemActive(0)
    // create triggers
    childTriggers.each(function (index) {
      ScrollTrigger.create({
        trigger: $(this),
        scroller: '.locomotive-scroll',
        ease: 'none',
        markers: true,
        scrub: 'true',
        start: '30vh center',
        end: 'bottom center',
        onToggle: (isActive) => {
          if (isActive) {
            makeItemActive(index)
          }
        },
      })
    })
  })

  ScrollTrigger.addEventListener('refresh', () => locoScroll.update())
  ScrollTrigger.refresh()
}
