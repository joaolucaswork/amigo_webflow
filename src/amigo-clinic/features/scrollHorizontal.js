/* eslint-disable no-dupe-class-members */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Dragdealer } from 'dragdealer'
import gsap from 'gsap'
import { Observer } from 'gsap/Observer'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import imagesloaded from 'imagesloaded'

function scrollHorizontal() {
  // © Code by T.RICKS, https://www.timothyricks.com/
  // Copyright 2021, T.RICKS, All rights reserved.
  // You have the license to use this code in your projects but not to redistribute it to others
  gsap.registerPlugin(ScrollTrigger)
  let horizontalItem = $('.horizontal-item')
  let horizontalSection = $('.horizontal-section')
  let moveDistance
  function calculateScroll() {
    // Desktop
    let itemsInView = -0.5
    let scrollSpeed = 1.9

    if (window.matchMedia('(max-width: 479px)').matches) {
      // Mobile Portrait
      itemsInView = 1
      scrollSpeed = 1.2
    } else if (window.matchMedia('(max-width: 767px)').matches) {
      // Mobile Landscape
      itemsInView = 1
      scrollSpeed = 1.2
    } else if (window.matchMedia('(max-width: 991px)').matches) {
      // Tablet
      itemsInView = 2
      scrollSpeed = 1.2
    } else if (window.matchMedia('(min-width: 1920px)').matches) {
      // Tablet
      itemsInView = -0.5
      scrollSpeed = 1.9
    }
    let moveAmount = horizontalItem.length - itemsInView
    let minHeight =
      scrollSpeed * horizontalItem.outerWidth() * horizontalItem.length
    if (moveAmount <= 0) {
      moveAmount = 0
      minHeight = 0
      // horizontalSection.css('height', '100vh');
    } else {
      horizontalSection.css('height', '200vh')
    }
    moveDistance = horizontalItem.outerWidth() * moveAmount
    horizontalSection.css('min-height', minHeight + 'px')
  }
  calculateScroll()
  window.onresize = function () {
    calculateScroll()
  }

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.horizontal-trigger',
      // trigger element - viewport
      start: 'top top',
      end: 'bottom top',
      invalidateOnRefresh: true,
      scrub: 1,
    },
  })
  tl.to('.horizontal-section .clinic-agenda_component', {
    x: () => -moveDistance,
    duration: 1,
  })

  gsap.to('progress', {
    value: 100,
    ease: 'none',
    scrollTrigger: {
      trigger: '.horizontal-trigger',
      scrub: 1,
      invalidateOnRefresh: true,
      start: 'top top',
      end: 'bottom top',
    },
  })
}

export default scrollHorizontal
