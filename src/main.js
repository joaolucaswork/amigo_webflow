/* eslint-disable no-unused-vars */
import { scrollAtenda } from './amigo-clinic/features/scrollAtenda'
import { amigoContabil } from './features/amigo_contabil/amigoContabil'
import { amigoCare } from './features/amigoCare'
import { amigoClinic } from './features/amigoClinic'
import { amigoExp } from './features/amigoExp'
import { amigoSenior } from './features/amigoSenior'
import { artigoPage } from './features/artigoPage'
import { blogPage } from './features/blogPage'
import { globalCode } from './features/global'
import { homeAnimations } from './features/homepage'
import navbarAnimation from './features/navbarAnimation'
import { pVenda } from './features/pVenda'
import { tippyAnimation } from './features/tippyScript'

import './styles/swiper-style.css'
import './styles/style.css'
import './styles/home-animation-style.css'
import './styles/animation.css'

navbarAnimation()
tippyAnimation()
homeAnimations()
amigoClinic()
pVenda()
scrollAtenda()
amigoSenior()
amigoExp()
amigoContabil()
globalCode()
blogPage()
artigoPage()
amigoCare()
