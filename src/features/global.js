/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
/* eslint-disable no-dupe-class-members */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Dragdealer } from 'dragdealer'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollToPlugin)

export function globalCode() {
  var btn = $('.scroll-to-top')

  btn.on('click', function (e) {
    e.preventDefault()
    $('html, body').animate({ scrollTop: 0 }, '300')
  })

  const config = { attributes: true, childList: true, subtree: true }
  const callback = function (mutationsList, observer) {
    for (const mutation of mutationsList) {
      snapToCurrent()
    }
  }
  const observer = new MutationObserver(callback)
  $('.menu_link').each(function (index) {
    observer.observe($(this)[0], config)
  })

  let duration = 500
  let menuShape = $('.menu_shape')
  let menuShapeBG = $('.menu_shape-bg')
  let menuLink = $('.menu_link')

  function snapToCurrent() {
    $('.menu_link-bg').css('opacity', '0')
    menuShape.css('opacity', '1')
    if ($('.menu_link.w--current').length) {
      moveShape($('.menu_link.w--current'))
    } else {
      menuShape.css('opacity', '0')
    }
  }

  // On page load
  menuShapeBG.css('transition', `width ${duration / 2}ms`)
  menuShape.css('transition', `all ${duration}ms`)

  // Snap
  function moveShape(target) {
    let linkWidth = target.innerWidth()
    let linkOffset = target.offset().left
    let menuOffset = $('.menu').offset().left
    let leftPosition = linkOffset - menuOffset
    menuShape.css('left', leftPosition)
    menuShape.css('width', linkWidth)
  }

  // Resize
  window.addEventListener('resize', function () {
    snapToCurrent()
  })

  // Back button safari
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload()
    }
  }

  // Tab Profissionais
  if ($('.tab-contabilidade.profissionais').hasClass('w--current')) {
    $('.menu_link.p-profissionais').addClass('w--current')
    $('.menu_link.p-clinicas').removeClass('w--current')
  }

  // Tab Clinicas
  if ($('.tab-contabilidade.clinicas').hasClass('w--current')) {
    $('.menu_link.p-profissionais').removeClass('w--current')
    $('.menu_link.p-clinicas').addClass('w--current')
  }

  $('.menu_link.p-profissionais').on('click', function (e) {
    $('.tab-contabilidade.profissionais').click()
    return false
  })

  $('.menu_link.p-clinicas').on('click', function (e) {
    $('.tab-contabilidade.clinicas').click()
    return false
  })

  $('.tab-contabilidade.clinicas').on('click', function (e) {
    gsap.to(window, { duration: 0, scrollTo: '.div-trick' })
    $('.menu_link.p-clinicas').addClass('w--current')
    $('.menu_link.p-profissionais').removeClass('w--current')
    return false
  })

  $('.tab-contabilidade.profissionais').on('click', function (e) {
    gsap.to(window, { duration: 0, scrollTo: '.div-trick' })
    $('.menu_link.p-profissionais').addClass('w--current')
    $('.menu_link.p-clinicas').removeClass('w--current')

    return false
  })

  // Tab Menu
  $('.section-recem-formado-hero').each(function (index) {
    ScrollTrigger.create({
      trigger: $(this),
      start: 'top 10%',
      end: 'bottom 10%',
      onEnter: () => {
        $('.menu_wrap').removeClass('active-menu')
      },
      onEnterBack: () => {
        $('.menu_wrap').removeClass('active-menu')
      },
    })
  })

  $('.section-contabilidade-tab').each(function (index) {
    ScrollTrigger.create({
      trigger: $(this),
      start: 'top 10%',
      end: 'bottom 10%',
      onEnter: () => {
        $('.menu_wrap').addClass('active-menu')
      },
      onEnterBack: () => {
        $('.menu_wrap').addClass('active-menu')
      },
    })
  })
}
// eslint-disable-next-line no-unused-vars
