/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollToPlugin)

export function extraNavbarFunction() {
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

  /* NAVBAR EXTRA CÓDIGO */

  // START Tab Profissionais
  if ($('.tab-contabilidade.profissionais').hasClass('w--current')) {
    $('.menu_link.p-profissionais').addClass('w--current')
    $('.menu_link.p-clinicas').removeClass('w--current')
  }

  $('.tab-contabilidade.profissionais').on('click', function (e) {
    $('.menu_link.p-profissionais').addClass('w--current')
    $('.menu_link.p-clinicas').removeClass('w--current')
    return false
  })

  $('.menu_link.p-profissionais').on('click', function (e) {
    $('.tab-contabilidade.profissionais').click()
    gsap.to(window, { duration: 0, scrollTo: '.div-trick' })
    return false
  })

  // END Tab Profissionais

  // START Tab Clinicas
  if ($('.tab-contabilidade.clinicas').hasClass('w--current')) {
    $('.menu_link.p-profissionais').removeClass('w--current')
    $('.menu_link.p-clinicas').addClass('w--current')
  }

  $('.tab-contabilidade.clinicas').on('click', function (e) {
    $('.menu_link.p-clinicas').addClass('w--current')
    $('.menu_link.p-profissionais').removeClass('w--current')
    return false
  })

  $('.menu_link.p-clinicas').on('click', function (e) {
    $('.tab-contabilidade.clinicas').click()
    gsap.to(window, { duration: 0, scrollTo: '.div-trick' })
    return false
  })

  // END Tab Clinicas

  // Tab Menu
  $('.div-trick').each(function (index) {
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

  $('.show-navbar').each(function (index) {
    ScrollTrigger.create({
      trigger: $(this),
      start: '-150 center',
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
