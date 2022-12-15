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

  class Inserter {
    constructor() {
      // params
      this.element = document.querySelector('[data-insert="me"]')
      this.collection = document.querySelector('[data-insert="here"]')
      this.position = this.collection.getAttribute('data-where')
      this.attach(this.position)
    }
    attach(position) {
      if (position === 'first') {
        this.collection.insertBefore(this.element, this.collection.children[0])
      } else if (position === 'last' || position === undefined) {
        this.collection.appendChild(this.element)
      } else if (position === 'center') {
        this.collection.insertBefore(
          this.element,
          this.collection.children[this.collection.children.length / 2]
        )
      } else {
        this.collection.insertBefore(
          this.element,
          this.collection.children[position]
        )
      }
    }
  }
  new Inserter()

  var pageUrl = document.URL
  var pageTitle = document.title

  document.querySelector('#share2').addEventListener('click', function () {
    if (typeof navigator.share === 'undefined') {
      log('No share API available!')
    } else {
      navigator
        .share({
          title: pageTitle,
          url: pageUrl,
          text: 'Olha essa matéria da L2',
        })

        .then(function () {
          log('Share success!')
        })
        .catch(function () {
          log('Share failure!')
        })
    }
  })

  document.querySelector('#share').addEventListener('click', function () {
    if (typeof navigator.share === 'undefined') {
      log('No share API available!')
    } else {
      navigator
        .share({
          title: pageTitle,
          url: pageUrl,
          text: 'Olha essa matéria incrível da L2:',
        })

        .then(function () {
          log('Share success!')
        })
        .catch(function () {
          log('Share failure!')
        })
    }
  })
}

// eslint-disable-next-line no-unused-vars
