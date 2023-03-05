/* eslint-disable no-inner-declarations */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Lenis from '@studio-freight/lenis'
import { Dragdealer } from 'dragdealer'
import gsap from 'gsap'
import { Flip } from 'gsap/Flip'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import imagesloaded from 'imagesloaded'

gsap.registerPlugin(ScrollTrigger, Flip)

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
        touchMultiplier: 1,
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
        //makeItemActive(0)
        // create triggers
        childTriggers.each(function (index) {
          ScrollTrigger.create({
            trigger: $(this),
            ease: 'none',
            start: 'top center',
            end: 'bottom center',
            onLeave: function () {
              childTriggers.eq(0).removeClass('is-active')
            },
            onLeaveBack: function () {
              childTriggers.eq(0).removeClass('is-active')
            },
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
        left: 0,
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
          document
            .querySelectorAll('.light-led-emoji')
            .forEach((target) => target.classList.add('acessa'))
        },
      })

      ScrollTrigger.create({
        trigger: '.section_superlotacao-filas',
        start: 'top center',
        scrub: true,
        ease: 'none',
        lazy: false,
        onEnter: function () {
          document
            .querySelectorAll('.pink-shadown, .purple-shadown')
            .forEach((target) => target.classList.add('ativar'))
        },
      })

      ScrollTrigger.create({
        trigger: '.amigo-one-banner',
        start: 'top center',
        lazy: false,
        onEnter: function () {
          document
            .querySelectorAll('.rounded-circle-blur')
            .forEach((target) => target.classList.add('ativar'))
        },
      })

      ScrollTrigger.create({
        trigger: '.section_convite-residente',
        start: 'top center',
        lazy: false,
        onEnter: function () {
          document
            .querySelectorAll('.green-shadown-resident')
            .forEach((target) => target.classList.add('ativar'))
        },
      })

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
      //Cards Header

      // Logo Scale
      $('.section_amigo-exp-hero').each(function (index) {
        let triggerElement = $(this)
        let targetElement = $(
          '.grid-images-aexp.first, .grid-images-aexp.third'
        )

        let tl6 = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            // trigger element - viewport
            start: 'top center',
            ease: 'none',
            end: 'bottom top',
            scrub: true,
            onEnter: function () {
              document
                .querySelectorAll('.blue-green-shadown')
                .forEach((target) => target.classList.add('ativar'))
            },
          },
        })
        tl6.from(
          targetElement,
          {
            y: '-15%',
            duration: 1,
          },
          0
        )
        tl6.from(
          '.grid-images-aexp.second',
          {
            y: '15%',
            duration: 1,
          },
          0
        )
      })

      // Logo Scale
      $('.section_superlotacao-filas').each(function (index) {
        let triggerElement = $(this)
        let targetElement = $('.superlotacao-glass-decorative.superlotacao')

        let tl3 = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            // trigger element - viewport
            start: 'top center',
            end: 'bottom top',
            scrub: true,
            ease: 'none',
          },
        })
        tl3.from(
          targetElement,
          {
            y: '-25%',
            duration: 1,
          },
          0
        )
        tl3.from(
          '.superlotacao-glass-decorative.filas',
          {
            y: '25%',
            duration: 1,
          },
          0
        )
      })

      // Logo Scale
      $('.amigo-one-banner').each(function (index) {
        let triggerElement = $(this)
        let targetElement = $('.amigo-one-banner_wrapper')

        let tl4 = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            // trigger element - viewport
            start: 'top center',
            end: 'bottom 80%',
            scrub: true,
            ease: 'none',
          },
        })
        tl4.to(
          '.grid-item',
          {
            y: '0%',
            autoAlpha: 1,
          },
          0
        )

        tl4.to(
          targetElement,
          {
            x: '0%',
            autoAlpha: 1,
          },
          0
        )
      })

      // Scroll into view

      let tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: '.amigo-one-exp_component',
          start: 'top center',
          //  scrub: true,
          end: 'bottom top',
        },
      })
      tl1.to('.amigo-one-exp-grid_item', {
        y: '0%',
        autoAlpha: 1,
        stagger: { each: 0.2 },
        ease: 'power3.out',
        duration: 0.7,
      })

      let tl5 = gsap.timeline({
        scrollTrigger: {
          trigger: '.voce-ja-pensou_component',
          start: 'top center',
          end: 'bottom top',
        },
      })
      tl5.to('.voce-ja-pensou-icon-circle', {
        scale: '1',
        autoAlpha: 1,
        stagger: { each: 0.2 },
        ease: 'power3.out',
        duration: 0.7,
      })

      tl5.from(
        '.text-opacity-animation',
        {
          autoAlpha: 1,
          stagger: { each: 0.2 },
          ease: 'power3.out',
          duration: 0.7,
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
          pausedStateSetting = true
        if (reverseSetting) moveDistanceSetting = 100
        let marqueeTimeline = gsap.timeline({
          repeat: -1,
          paused: true,
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

        document.querySelectorAll('.desconto-trigger').forEach((trigger) => {
          trigger.addEventListener('click', function () {
            document
              .querySelectorAll('.section_faixa-desconto-liberado')
              .forEach((target) => target.classList.add('codigo-liberado'))
            document
              .querySelectorAll('.text-bloqueado')
              .forEach((target) => target.classList.add('hide'))
            document
              .querySelectorAll('.text-liberado')
              .forEach((target) => target.classList.add('show'))
            document
              .querySelectorAll('.primary-button-default-link')
              .forEach((target) => target.classList.remove('disabled'))
            document
              .querySelectorAll('.ocultar-codigo')
              .forEach((target) => target.classList.add('liberado'))
            document
              .querySelectorAll('.texto-codigo')
              .forEach((target) => target.classList.add('liberado'))
            document
              .querySelectorAll('.block-code')
              .forEach((target) => target.classList.add('hide'))
            document
              .querySelectorAll('.banner-bloqueado')
              .forEach((target) => target.classList.add('hide'))
            document
              .querySelectorAll('.banner-liberado')
              .forEach((target) => target.classList.add('liberado'))
            document
              .querySelectorAll('.circle-banner-desconto')
              .forEach((target) => target.classList.add('liberado'))
          })
        })

        let pausado = true

        // when the form is submitted
        $('.form-amigoexp').submit(() => {
          setTimeout(() => {
            $('.desconto-trigger').click()
            // refatoração utilizando operador ternário
            pausado ? marqueeTimeline.play() : marqueeTimeline.pause()
            pausado = !pausado
          }, 600)
          // NICE!!!!!!!!
        })
      })
    }
  })
}
