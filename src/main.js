import {createApp} from 'vue'
import App from './App.vue'
import layout from '../lib'
import router from '@/router'

import '@/assets/scss/app.scss'

createApp(App)
  .use(router)
  .use(layout)
  .mount('#app')
