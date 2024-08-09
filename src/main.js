import './assets/main.css'

import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Success from './components/Success.vue' // Убедитесь, что путь к компоненту правильный

import App from './App.vue'

const routes = [
  {
    path: '/payment-success',
    name: 'Success',
    component: Success
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.use(autoAnimatePlugin)
app.mount('#app')
