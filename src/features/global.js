/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */

export function globalCode() {
  var btn = $('.scroll-to-top')

  btn.on('click', function (e) {
    e.preventDefault()
    $('html, body').animate({ scrollTop: 0 }, '300')
  })
}

// eslint-disable-next-line no-unused-vars
