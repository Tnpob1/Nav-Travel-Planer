import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


const menu_btn = document.querySelector('.hamburger')
const mobile_menu = document.querySelector('.mobile-nav')

menu_btn.addEventListener('click', function (){
    menu_btn.classList.toggle('is-active')
    mobile_menu.classList.toggle('is-active')
})

