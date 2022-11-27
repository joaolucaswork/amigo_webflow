/* eslint-disable no-dupe-class-members */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { Observer } from 'gsap/Observer'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import imagesloaded from 'imagesloaded'

export function scrollFrontoffice() {
  // © Code by T.RICKS, https://www.timothyricks.com/
  // Copyright 2021, T.RICKS, All rights reserved.
  // You have the license to use this code in your projects but not to redistribute it to others
  gsap.registerPlugin(ScrollTrigger, Draggable)

  let clamp, dragRatio
  // Animação responsiva do GSAP

  $(function () {
    if ($('body').is('.front-office')) {
      let horizontalItem = $('.horizontal-item')
      let horizontalSection = $('.horizontal-section')
      let moveDistance
      // eslint-disable-next-line no-inner-declarations
      function calculateScroll() {
        // Desktop
        let itemsInView = 1.2
        let scrollSpeed = 1.9

        if (window.matchMedia('(max-width: 479px)').matches) {
          // Mobile Portrait
          itemsInView = -3.8
          scrollSpeed = 1.2
        } else if (window.matchMedia('(max-width: 767px)').matches) {
          // Mobile Landscape
          itemsInView = -3.7
          scrollSpeed = 1.2
        } else if (window.matchMedia('(max-width: 991px)').matches) {
          // Tablet
          itemsInView = -2.5
          scrollSpeed = 1.2
        } else if (window.matchMedia('(max-width: 1280px)').matches) {
          // Tablet
          itemsInView = -1.6
          scrollSpeed = 1.9
        } else if (window.matchMedia('(max-width: 1920px)').matches) {
          itemsInView = -0.6
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
      let scrollTween = gsap.to(
        '.horizontal-section .clinic-agenda_component',
        {
          x: () => -moveDistance,
          duration: 1,
        }
      )
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

      let horizontalScroll = ScrollTrigger.create({
        animation: scrollTween,
        trigger: '.horizontal-trigger',
        scrub: 1,
        start: 'top top',
        end: 'bottom top',
        invalidateOnRefresh: true,
      })

      var drag = Draggable.create('.proxy', {
        trigger: horizontalSection,
        type: 'x',
        inertia: true,
        allowContextMenu: true,
        onPress() {
          clamp || ScrollTrigger.refresh()
          this.startScroll = horizontalScroll.scroll()
        },
        onDrag() {
          horizontalScroll.scroll(
            clamp(this.startScroll - (this.x - this.startX) * moveDistance)
          )
          // if you don't want it to lag at all while dragging (due to the 1-second scrub), uncomment the next line:
          //horizontalScroll.getTween().progress(1);
        },
      })[0]

      ScrollTrigger.addEventListener('refresh', () => {
        clamp = gsap.utils.clamp(
          horizontalScroll.start + 1,
          horizontalScroll.end - 1
        ) // don't let the drag-scroll hit the very start or end so that it doesn't unpin
        // total scroll amount divided by the total distance that the sections move gives us the ratio we can apply to the pointer movement so that it fits.
        dragRatio =
          horizontalSection.offsetWidth /
          (window.innerWidth * (horizontalItem.length - 1))
      })
    }
  })
}
