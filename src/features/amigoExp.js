/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Dragdealer } from 'dragdealer'
import gsap from 'gsap'
import { Draggable } from 'gsap/all'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import imagesloaded from 'imagesloaded'
import JSConfetti from 'js-confetti'
import LocomotiveScroll from 'locomotive-scroll'

gsap.registerPlugin(ScrollTrigger)

export function amigoExp() {
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector('.locomotive-scroll'),
    smooth: true,
    smartphone: {
      smooth: false,
      breakpoint: 0,
    },
    tablet: {
      smooth: true,
    },
    smoothMobile: 0,
    multiplier: 1.0,
  })

  // Wait 2 seconds then calculate the new page height

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
    pinType: document.querySelector('.locomotive-scroll').style.transform
      ? 'transform'
      : 'fixed',
  })
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.

  ScrollTrigger.defaults({
    scroller: '.locomotive-scroll',
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

  const secaoEspecifica = document.querySelectorAll(
    '.section_melhorar-experiencia'
  )
  $('.toggle-decorative').on('click', function (e) {
    e.preventDefault()
  })

  var toggle = new Dragdealer('toggle-decorative', {
    steps: 2,
    x: 0,
    y: 1,
    speed: 0.3,
    right: 16,
    //  slide: true,

    requestAnimationFrame: true,
    animationCallback: function (x, y) {
      // Atualiza o estado do toggle quando o usuário arrasta o controle
      var toggleState = Math.round(x)
      // Faça algo com o estado do toggle, por exemplo:
      if (toggleState === 0) {
        document
          .querySelectorAll('.toggle-decorative')
          .forEach((target) => target.classList.remove('active'))
      } else {
        document
          .querySelectorAll('.toggle-decorative')
          .forEach((target) => target.classList.add('active'))
        confetti()
      }
    },
  })

  ScrollTrigger.create({
    trigger: secaoEspecifica,
    scroller: '.locomotive-scroll',
    start: 'top 50%',
    lazy: false,
    onEnter: function () {
      toggle.setValue(1) // Muda o estado do toggle quando a seção específica entra na viewport
    },
  })

  ScrollTrigger.create({
    trigger: '.section_voce-ja-pensou',
    scroller: '.locomotive-scroll',
    start: 'top center',
    lazy: false,
    onEnter: function () {
      toggle.setValue(1) // Muda o estado do toggle quando a seção específica entra na viewport
      document
        .querySelectorAll('.light-led-emoji')
        .forEach((target) => target.classList.add('acessa'))
    },
  })

  const canvas = document.querySelector('#canvas-target')
  const jsConfetti = new JSConfetti({ canvas })

  const confetti = () => {
    jsConfetti.addConfetti({
      confettiNumber: 2,
      emojiSize: 100,
      emojis: ['🥼', '🩺', '👩🏿‍⚕️', '👩🏻‍⚕️', '💙'],
    })
  }

  let tl = gsap.timeline()

  tl.to(
    '.aexp-img',
    {
      opacity: 1,
      scale: 1,
      stagger: { each: 0.1, from: 'start' },
      ease: 'power2.out',
      duration: 0.8,
    },
    0
  )

  imagesloaded('.root', { background: true }, function () {
    locoScroll.update()
  })
  ScrollTrigger.addEventListener('refresh', () => locoScroll.update())
  ScrollTrigger.refresh()
}
