import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.slim'
import 'popper.js/dist/popper'
import 'bootstrap/dist/js/bootstrap'

createApp(App).use(router).mount('#app')
