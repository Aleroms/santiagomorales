import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin, faThreads } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowDown,
  faArrowUp,
  faArrowUpRightFromSquare,
  faChevronLeft,
  faChevronRight,
  faCodeBranch,
  faEnvelope,
  faFile,
  faLocationDot,
  faLock,
  faMoon,
  faPen,
  faPlus,
  faSun,
  faTrash,
  faTurnUp,
  faXmark,
  faScissors,
  faHandHoldingHeart,
  faBomb,
  faSeedling,
  faShirt
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
  faArrowDown,
  faCodeBranch,
  faPlus,
  faPen,
  faTrash,
  faArrowUpRightFromSquare,
  faChevronRight,
  faThreads,
  faLocationDot,
  faLock,
  faScissors,
  faHandHoldingHeart,
  faBomb,
  faSeedling,
  faShirt,
  faMoon,
  faSun
)

export { FontAwesomeIcon }
