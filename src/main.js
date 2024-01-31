import { createApp } from 'vue'
import App from './App.vue'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

const app = createApp(App)

// font-awesome
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
