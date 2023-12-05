import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowDown,
  faArrowUp,
  faChevronLeft,
  faEnvelope,
  faFile,
  faMoon,
  faSun,
  faTurnUp,
  faXmark
} from '@fortawesome/free-solid-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

//free brands svg icons
library.add(faGithub, faLinkedin)

//free regular svg icons
library.add(
  faMoon,
  faSun,
  faChevronLeft,
  faTurnUp,
  faEnvelope,
  faFile,
  faCopyright,
  faXmark,
  faArrowUp,
  faArrowDown
)

export { FontAwesomeIcon }
