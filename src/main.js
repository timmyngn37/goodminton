import { createApp } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'

const app = createApp(App)
app.component('Header', Header)
app.component('Footer', Footer)
app.use(router)
app.use(createPinia());
app.mount('#app')
