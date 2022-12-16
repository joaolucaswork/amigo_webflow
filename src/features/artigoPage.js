/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
export function artigoPage() {
  $(function () {
    if ($('body').is('.artigo')) {
      let calcScrollValue = () => {
        let scrollProgress = document.getElementById('progress')
        let progressValue = document.getElementById('progress-value')
        let pos = document.documentElement.scrollTop
        let calcHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight
        let scrollValue = Math.round((pos * 100) / calcHeight)
        if (pos > 100) {
          scrollProgress.style.display = 'grid'
        } else {
          scrollProgress.style.display = 'grid'
        }

        scrollProgress.style.background = `conic-gradient(#00417a ${scrollValue}%, rgba(255, 255, 255, 0.1) ${scrollValue}%)`
      }

      window.onscroll = calcScrollValue
      window.onload = calcScrollValue

      let myTimeout
      $('.icon_blog_default').on('click', function () {
        clearTimeout(myTimeout)
        $('.blog_wrapper').addClass('transition')
        myTimeout = setTimeout(() => {
          $('.blog_wrapper').removeClass('transition')
        }, 600)
        $('.blog_wrapper').toggleClass('white-mode')
        if ($('.blog_wrapper').hasClass('white-mode')) {
          localStorage.setItem('white-mode', 'true')
        } else {
          localStorage.removeItem('white-mode')
        }
      })
    }
  })
}
