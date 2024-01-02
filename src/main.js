import '@/assets/main.css'
import '@formkit/themes/genesis'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//plugins
import { FontAwesomeIcon } from '@/plugins/fontawesome'
import { plugin, customConfig } from '@/plugins/formkit.config.js'
import { defaultConfig } from '@formkit/vue'
import { MotionPlugin } from '@vueuse/motion'
import { register } from 'swiper/element/bundle'
import 'swiper/swiper-bundle.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(plugin, defaultConfig(customConfig))
app.use(MotionPlugin)
app.use(register)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
