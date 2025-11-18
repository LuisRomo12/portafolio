// Ruta: src/main.js

import './assets/styles/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <-- Correcto

// 1. Crea la app
const app = createApp(App)

// 2. Dile a la app que USE el router
app.use(router)

// 3. Monta la app
app.mount('#app')