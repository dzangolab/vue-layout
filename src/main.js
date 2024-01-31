import {createApp} from 'vue'
import App from './App.vue'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

const app = createApp(App)

// font-awesome
app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
