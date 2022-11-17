/* eslint-disable no-unused-vars */
//import appDepoimentos from './features/amigoOne'
import scrollHorizontal from './amigo-clinic/features/scrollHorizontal'
//import { amigoOne } from './features/amigoOne'
//import carroselDepoimentos from './features/carroselSwiper'
import { amigoClinic } from './features/amigoClinic'
import { globalCode } from './features/global'
import { homeAnimations } from './features/homepage'
import navbarAnimation from './features/navbarAnimation'
import { tippyAnimation } from './features/tippyScript'

import './styles/swiper-style.css'
import './styles/style.css'
import './styles/home-animation-style.css'

navbarAnimation()
tippyAnimation()
homeAnimations()
amigoClinic()
scrollHorizontal()
globalCode()
