/* eslint-disable no-unused-vars */
import { scrollAtenda } from './amigo-clinic/features/scrollAtenda'
import { scrollAtendimento } from './amigo-clinic/features/scrollAtendimento'
import { scrollBackoffice } from './amigo-clinic/features/scrollBackoffice'
import { scrollFrontoffice } from './amigo-clinic/features/scrollFrontoffice'
import { scrollOrganize } from './amigo-clinic/features/scrollOrganize'
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
scrollFrontoffice()
scrollAtenda()
scrollBackoffice()
scrollAtendimento()
scrollOrganize()
globalCode()
