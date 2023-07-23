import './assets/main.css'

import { createApp } from 'vue'
import {store} from './stores'
import { router } from './routes'
import App from './App.vue'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
