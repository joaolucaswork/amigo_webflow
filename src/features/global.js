/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */

export function globalCode() {
  var btn = $('.scroll-to-top')

  btn.on('click', function (e) {
    e.preventDefault()
    $('html, body').animate({ scrollTop: 0 }, '300')
  })

  $(document).ajaxStop(function () {
    // Get all form values
    var string =
      '?' +
      $('.form.is-modal-version')
        .find('input')
        .map(function () {
          // encodes characters such as ?,=,/,&,:
          var header = encodeURIComponent((this.name || this.id).trim())
          return header
            ? header + '=' + encodeURIComponent($(this).val())
            : null
        })
        .get()
        .join('&')

    // Redirect to this URL with the value of the form fields appended to the end of the URL
    location.href =
      'https://api.whatsapp.com/send?phone=5581998461310&text=' + string
  })
}

// eslint-disable-next-line no-unused-vars
