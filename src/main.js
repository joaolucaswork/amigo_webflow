/* eslint-disable no-unused-vars */
import { scrollAtenda } from './amigo-clinic/features/scrollAtenda'
import { scrollAtendimento } from './amigo-clinic/features/scrollAtendimento'
import { scrollBackoffice } from './amigo-clinic/features/scrollBackoffice'
import { scrollCampanha } from './amigo-clinic/features/scrollCampanha'
import { scrollFrontoffice } from './amigo-clinic/features/scrollFrontoffice'
import { scrollOrganize } from './amigo-clinic/features/scrollOrganize'
import { amigoCare } from './features/amigoCare'
import { amigoClinic } from './features/amigoClinic'
import { artigoPage } from './features/artigoPage'
import { blogPage } from './features/blogPage'
import { globalCode } from './features/global'
import { homeAnimations } from './features/homepage'
import navbarAnimation from './features/navbarAnimation'
import { tippyAnimation } from './features/tippyScript'

import './styles/swiper-style.css'
import './styles/style.css'
import './styles/home-animation-style.css'
import './styles/animation.css'

navbarAnimation()
tippyAnimation()
homeAnimations()
scrollCampanha()
amigoClinic()
scrollFrontoffice()
scrollAtenda()
scrollBackoffice()
scrollAtendimento()
scrollOrganize()
globalCode()
blogPage()
artigoPage()
amigoCare()
