/* eslint-disable no-dupe-class-members */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import dragscroll from 'dragscroll'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
//import imagesloaded from 'imagesloaded'
import locomotiveScroll from 'locomotive-scroll'

function scrollHorizontal() {
  document
    .querySelectorAll('#smooth')
    .forEach((target) => target.classList.add('dragscroll'))
}

export default scrollHorizontal
