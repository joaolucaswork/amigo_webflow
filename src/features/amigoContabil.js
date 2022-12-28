/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

export function amigoContabil() {
  $(function () {
    if ($('body').is('.amigo-contabil')) {
      $(function () {
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
}
