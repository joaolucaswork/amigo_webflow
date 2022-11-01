/* eslint-disable no-undef */
import gsap from 'gsap'
// eslint-disable-next-line no-unused-vars
import { Observer } from 'gsap/Observer'

function navbarAnimation() {
  // Animacao de Scroll Navbar
  var lastScrollTop
  window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if (scrollTop > lastScrollTop && scrollTop > 10) {
      document
        .querySelectorAll('.nav_component')
        .forEach((target) => target.classList.add('hide-nav'))
    } else {
      document
        .querySelectorAll('.nav_component')
        .forEach((target) => target.classList.remove('hide-nav'))
    }
    lastScrollTop = scrollTop
  })

  $('#solucoes-nav').each(function (index, element) {
    var tl0 = gsap.timeline({ paused: true })
    tl0.set('.menu-link-item.solucoes-link', { y: 100, autoAlpha: 0 })
    tl0.to(
      '.menu-link-item.solucoes-link',
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        stagger: { each: 0.2, from: 'start' },
        ease: 'Strong.easeInOut',
      },
      0
    )
    element.animation = tl0
  })

  $('#solucoes-nav').mouseenter(function () {
    this.animation.play()
  })

  $('#produtos-nav').each(function (index, element) {
    var tl0 = gsap.timeline({ paused: true })
    tl0.set('.menu-link-item.produtos-link', { y: 100, autoAlpha: 0 })
    tl0.to(
      '.menu-link-item.produtos-link',
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        stagger: { each: 0.2, from: 'start' },
        ease: 'Strong.easeInOut',
      },
      0
    )
    element.animation = tl0
  })

  $('#produtos-nav').mouseenter(function () {
    this.animation.play()
  })
}

export default navbarAnimation
