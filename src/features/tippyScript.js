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
  tippy('.status-icon', {
    theme: 'grey-80',
    placement: 'left',
  })
  tippy('.button-secondary.app-variation.apple-button', {
    theme: 'grey-80',
    allowHTML: true,
    content:
      '<div class="qr-code_wrapper apple-store"><div class="max-width-qr"><div>Aponte a câmera do seu celular</div></div><img src="https://uploads-ssl.webflow.com/6357a19f7e2c508311a7fcf5/63713a05a2ecca7d41eaccde_appstore.svg" loading="lazy" alt="" class="image-qr-code"></div>',
    placement: 'bottom',
  })
  tippy('.button-secondary.app-variation.android-button', {
    theme: 'grey-80',
    allowHTML: true,
    content:
      '<div class="qr-code_wrapper app-store"><div class="max-width-qr"><div>Aponte a câmera do seu celular</div></div><img src="https://uploads-ssl.webflow.com/6357a19f7e2c508311a7fcf5/63713a052c89f717f5b1b2c3_playstore.svg" loading="lazy" alt="" class="image-qr-code"></div>',
    placement: 'bottom',
  })
}
