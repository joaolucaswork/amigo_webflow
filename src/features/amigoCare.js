import gsap from 'gsap'

export function amigoCare() {
  // Animate the properties individually
  gsap.utils.toArray('.floating-icon').forEach((star) => {
    tweenProperty(star, 'scale', 0.8, 1.2)
    tweenProperty(star, 'x', -80, 80)
    tweenProperty(star, 'y', -30, 30)
  })

  function tweenProperty(target, prop, min, max) {
    var randomDur = gsap.utils.random(3, 6, 0.2, true)
    var randomDelay = gsap.utils.random(0.6, 0.2, true)

    gsap.to(target, {
      [prop]: gsap.utils.random(min, max),
      duration: randomDur(),
      delay: randomDelay(),
      ease: 'none',
      onComplete: tweenProperty,
      onCompleteParams: [target, prop, min, max],
    })
  }

  function background() {
    var next = gsap.utils.random(3, 6, 0.5, true)
    var opa = gsap.utils.random(1, true)

    gsap.to('.floating-icon', { opacity: opa, duration: 2, ease: 'none' })

    // eslint-disable-next-line no-unused-vars
    var delayedCall = gsap.delayedCall(next, background)
  }

  background()
}
