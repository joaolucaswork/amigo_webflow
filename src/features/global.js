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

  $('.menu_link.p-profissionais').on('click', function (e) {
    gsap.to(window, { duration: 0, scrollTo: '.div-trick' })
    $('.menu_link.p-profissionais').addClass('w--current')
    $('.menu_link.p-clinicas').removeClass('w--current')
    $('.tab-contabilidade.profissionais').click()
    return false
  })

  $('.menu_link.p-clinicas').on('click', function (e) {
    $('.menu_link.p-clinicas').addClass('w--current')
    $('.menu_link.p-profissionais').removeClass('w--current')
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
}
// eslint-disable-next-line no-unused-vars
