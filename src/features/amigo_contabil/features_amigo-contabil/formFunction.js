/* eslint-disable no-unused-vars */

export function formFunction() {
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
}
