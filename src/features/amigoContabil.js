/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import stickybits from 'stickybits'

gsap.registerPlugin(ScrollToPlugin)

export function amigoContabil() {
  $(function () {
    if ($('body').is('.amigo-contabil')) {
      $(function () {
        stickybits('.nossos-planos-profissionais-top_wrapper', {
          stickyBitStickyOffset: 0,
        })

        /*** START SCRIPT CONFIG ***/

        // Replace with value for your form. ie. "#your-form-id" or ".your-form-class"
        var FORM_SELECTOR = '#minimal-mail-form'

        // Do you want to hide the success message after the form is submitted?
        var HIDE_SUCCESS_MESSAGE = true

        // Do you want the success message to show above the form?
        var SUCCESS_MESSAGE_ABOVE_FORM = true

        /*** END SCRIPT CONFIG ***/

        var resetCustomElement = function (customElement) {
          var inputElement = customElement.nextSibling
          if (inputElement.checked) {
            customElement.classList.add('w--redirected-checked')
          } else {
            customElement.classList.remove('w--redirected-checked')
          }
        }

        var resetForm = function (form, successDiv) {
          // Reset the inputs in the form

          // Reset custom checkboxes
          document
            .querySelectorAll('.w-checkbox-input--inputType-custom')
            .forEach(resetCustomElement)

          // Reset custom radio buttons
          document
            .querySelectorAll('.w-form-formradioinput--inputType-custom')
            .forEach(resetCustomElement)

          // Show the form
          form.style.display = 'flex'

          // Hide Success Message
          if (HIDE_SUCCESS_MESSAGE) {
            successDiv.style.display = 'none'
          }
        }

        var form = document.querySelector(FORM_SELECTOR)
        var successDiv = form.nextSibling
        if (!HIDE_SUCCESS_MESSAGE && SUCCESS_MESSAGE_ABOVE_FORM) {
          // Move the form last so that the success message appears before it
          form.parentElement.appendChild(form)
        }

        // Create an observer to run our resetForm function when Webflow hides our form after submission
        var observer = new MutationObserver(function (mutations) {
          if (form.style.display === 'none') {
            resetForm(form, successDiv)
          }
        })

        // Listen for when the style attribute of our form changes
        observer.observe(form, { attributes: true, attributeFilter: ['style'] })
      })
    }
  })

  document.querySelectorAll('.mostrar-mais-buton-area').forEach((trigger) => {
    trigger.addEventListener('click', function () {
      this.x = ((this.x || 0) + 1) % 2
      if (this.x) {
        document
          .querySelectorAll('.starter-tabela-content-mobile_wrapper')
          .forEach((target) => target.classList.remove('closed-table'))
        $('.mostrar-mais-button').addClass('full-size')
      } else {
        document
          .querySelectorAll('.starter-tabela-content-mobile_wrapper')
          .forEach((target) => target.classList.add('closed-table'))
        gsap.to(window, {
          duration: 0.5,
          scrollTo: '.starter-tabela-content-mobile_wrapper',
        })
        $('.mostrar-mais-button').removeClass('full-size')
      }
    })
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
    gsap.to(window, { duration: 0, scrollTo: '.div-trick' })
    return false
  })

  $('.menu_link.p-clinicas').on('click', function (e) {
    $('.tab-contabilidade.clinicas').click()
    gsap.to(window, { duration: 0, scrollTo: '.div-trick' })
    return false
  })

  $('.tab-contabilidade.clinicas').on('click', function (e) {
    $('.menu_link.p-clinicas').addClass('w--current')
    $('.menu_link.p-profissionais').removeClass('w--current')
    return false
  })

  $('.tab-contabilidade.profissionais').on('click', function (e) {
    $('.menu_link.p-profissionais').addClass('w--current')
    $('.menu_link.p-clinicas').removeClass('w--current')

    return false
  })

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
