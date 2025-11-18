// Ruta: src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// 1. IMPORTA TU NUEVA VISTA AQUÍ
import ProjectsView from '../views/PojectsViews.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [


  ]
})

export default router