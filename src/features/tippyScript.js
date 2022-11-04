import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css' // optional for styling
import 'tippy.js/animations/scale.css'

export function tippyAnimation() {
  // With the above scripts loaded, you can call `tippy()` with a CSS
  // selector and a `content` prop:
  tippy('.scroll-to-top', {
    theme: 'grey-80',
    placement: 'left',
  })
  tippy('.button-secondary.app-variation', {
    theme: 'grey-80',
    followCursor: true,
    allowHTML: true,
    content:
      '<div class="qr-code_wrapper"><div class="max-width-qr"><div>Aponte a câmera do seu celular</div></div><img src="https://uploads-ssl.webflow.com/6357a19f7e2c508311a7fcf5/636538d7f2102662bea7af95_qr-code-img.svg" loading="lazy" alt=""></div>',
    placement: 'bottom',
  })
}
