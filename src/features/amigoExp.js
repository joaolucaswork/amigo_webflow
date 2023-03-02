/* eslint-disable no-inner-declarations */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Lenis from '@studio-freight/lenis'
import { Dragdealer } from 'dragdealer'
import gsap from 'gsap'
import { Draggable } from 'gsap/all'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import imagesloaded from 'imagesloaded'
import JSConfetti from 'js-confetti'

gsap.registerPlugin(ScrollTrigger)

export function amigoExp() {
  $(function () {
    if ($('body').is('.amigo-exp')) {
      // LENIS CODE
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      })
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)

      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault()
          lenis.scrollTo(this.getAttribute('href'))
        })
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
        start: 'top 50%',
        lazy: false,
        onEnter: function () {
          toggle.setValue(1) // Muda o estado do toggle quando a seção específica entra na viewport
        },
      })

      ScrollTrigger.create({
        trigger: '.section_voce-ja-pensou',
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

      // MARQUEE POWER-UP
      // attribute value checker
      function attr(defaultVal, attrVal) {
        const defaultValType = typeof defaultVal
        if (typeof attrVal !== 'string' || attrVal.trim() === '')
          return defaultVal
        if (attrVal === 'true' && defaultValType === 'boolean') return true
        if (attrVal === 'false' && defaultValType === 'boolean') return false
        if (isNaN(attrVal) && defaultValType === 'string') return attrVal
        if (!isNaN(attrVal) && defaultValType === 'number') return +attrVal
        return defaultVal
      }
      // marquee component
      $("[tr-marquee-element='component']").each(function (index) {
        let componentEl = $(this),
          panelEl = componentEl.find("[tr-marquee-element='panel']"),
          triggerHoverEl = componentEl.find(
            "[tr-marquee-element='triggerhover']"
          ),
          triggerClickEl = componentEl.find(
            "[tr-marquee-element='triggerclick']"
          )
        let speedSetting = attr(100, componentEl.attr('tr-marquee-speed')),
          verticalSetting = attr(
            false,
            componentEl.attr('tr-marquee-vertical')
          ),
          reverseSetting = attr(false, componentEl.attr('tr-marquee-reverse')),
          scrollDirectionSetting = attr(
            false,
            componentEl.attr('tr-marquee-scrolldirection')
          ),
          scrollScrubSetting = attr(
            false,
            componentEl.attr('tr-marquee-scrollscrub')
          ),
          moveDistanceSetting = -100,
          timeScaleSetting = 1,
          pausedStateSetting = false
        if (reverseSetting) moveDistanceSetting = 100
        let marqueeTimeline = gsap.timeline({
          repeat: -1,
          onReverseComplete: () => marqueeTimeline.progress(1),
        })
        if (verticalSetting) {
          speedSetting = panelEl.first().height() / speedSetting
          marqueeTimeline.fromTo(
            panelEl,
            { yPercent: 0 },
            {
              yPercent: moveDistanceSetting,
              ease: 'none',
              duration: speedSetting,
            }
          )
        } else {
          speedSetting = panelEl.first().width() / speedSetting
          marqueeTimeline.fromTo(
            panelEl,
            { xPercent: 0 },
            {
              xPercent: moveDistanceSetting,
              ease: 'none',
              duration: speedSetting,
            }
          )
        }
        let scrubObject = { value: 1 }
        ScrollTrigger.create({
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          onUpdate: (self) => {
            if (!pausedStateSetting) {
              if (
                scrollDirectionSetting &&
                timeScaleSetting !== self.direction
              ) {
                timeScaleSetting = self.direction
                marqueeTimeline.timeScale(self.direction)
              }
              if (scrollScrubSetting) {
                let v = self.getVelocity() * 0.006
                v = gsap.utils.clamp(-60, 60, v)
                let scrubTimeline = gsap.timeline({
                  onUpdate: () => marqueeTimeline.timeScale(scrubObject.value),
                })
                scrubTimeline.fromTo(
                  scrubObject,
                  { value: v },
                  { value: timeScaleSetting, duration: 0.5 }
                )
              }
            }
          },
        })
        function pauseMarquee(isPausing) {
          pausedStateSetting = isPausing
          let pauseObject = { value: 1 }
          let pauseTimeline = gsap.timeline({
            onUpdate: () => marqueeTimeline.timeScale(pauseObject.value),
          })
          if (isPausing) {
            pauseTimeline.fromTo(
              pauseObject,
              { value: timeScaleSetting },
              { value: 0, duration: 0.5 }
            )
            triggerClickEl.addClass('is-paused')
          } else {
            pauseTimeline.fromTo(
              pauseObject,
              { value: 0 },
              { value: timeScaleSetting, duration: 0.5 }
            )
            triggerClickEl.removeClass('is-paused')
          }
        }
        if (window.matchMedia('(pointer: fine)').matches) {
          triggerHoverEl.on('mouseenter', () => pauseMarquee(true))
          triggerHoverEl.on('mouseleave', () => pauseMarquee(false))
        }
        triggerClickEl.on('click', function () {
          !$(this).hasClass('is-paused')
            ? pauseMarquee(true)
            : pauseMarquee(false)
        })
      })
    }
  })
}
