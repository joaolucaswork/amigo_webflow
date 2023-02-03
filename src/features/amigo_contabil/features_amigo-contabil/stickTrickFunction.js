/* eslint-disable no-undef */
//import stickybits from 'stickybits'

export function strickTrickFunction() {
  document.addEventListener('DOMContentLoaded', () => {
    const stopStick = (position) => {
      const element = document.querySelector('.nossos-planos-wrapper')
      // eslint-disable-next-line no-unused-vars
      window.addEventListener('scroll', function (event) {
        if (window.scrollY > position) {
          element.classList.add('no-stick')
        } else {
          element.classList.remove('no-stick')
        }
      })
    }

    stopStick(3500) // 200px
  })
}
