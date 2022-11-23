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
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(Draggable)

  let sections = document.querySelectorAll('.horizontal-item')
  let scrollContainer = document.querySelector('.horizontal-section')
  let clamp, dragRatio

  $(function () {
    if ($('body').is('.front-office')) {
      let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
      })

      let horizontalScroll = ScrollTrigger.create({
        animation: scrollTween,
        trigger: scrollContainer,
        pin: true,
        scrub: 1,
        end: () => '+=' + scrollContainer.offsetWidth,
      })

      var drag = Draggable.create('.proxy', {
        trigger: scrollContainer,
        type: 'x',
        onPress() {
          clamp || ScrollTrigger.refresh()
          this.startScroll = horizontalScroll.scroll()
        },
        onDrag() {
          horizontalScroll.scroll(
            clamp(this.startScroll - (this.x - this.startX) * dragRatio)
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
          scrollContainer.offsetWidth /
          (window.innerWidth * (sections.length - 1))
      })
    }
  })
}
