/* eslint-disable no-dupe-class-members */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Dragdealer } from 'dragdealer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import imagesloaded from 'imagesloaded'

export function scrollAtenda() {
  // © Code by T.RICKS, https://www.timothyricks.com/
  // Copyright 2021, T.RICKS, All rights reserved.
  // You have the license to use this code in your projects but not to redistribute it to others
  gsap.registerPlugin(ScrollTrigger)

  $(function () {
    if ($('body').is('.internpage')) {
      $('.section-hero-front-office').each(function (index) {
        ScrollTrigger.create({
          trigger: $(this),
          start: 'top 10%',
          end: 'bottom 10%',
          onEnter: () => {
            $('.close-icon-scroll.version-scroll').removeClass('show')
          },
          onEnterBack: () => {
            $('.close-icon-scroll.version-scroll').removeClass('show')
          },
        })
      })

      $('.section-intern').each(function (index) {
        ScrollTrigger.create({
          trigger: $(this),
          start: 'top 10%',
          end: 'bottom 10%',
          onEnter: () => {
            $('.close-icon-scroll.version-scroll').addClass('show')
          },
          onEnterBack: () => {
            $('.close-icon-scroll.version-scroll').addClass('show')
          },
        })
      })
    }
  })
}
