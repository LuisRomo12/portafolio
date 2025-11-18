<script setup>
// 1. Importamos las "vistas" que actuarán como secciones
import HomeView from './views/HomeView.vue'
import PojectsViews from './views/PojectsViews.vue'
import ContactView from './views/ContactView.vue' // <-- 1. IMPORTA EL NUEVO
</script>

<template>
  <header>
    <nav class="navbar">
      <a href="#inicio">Inicio</a>
      <a href="#proyectos">Proyectos</a>
      <a href="#contacto">Contacto</a> </nav>
  </header>

  <main>
    <HomeView id="inicio" />
    <PojectsViews id="proyectos" />
    <ContactView id="contacto" /> </main>

</template>

<style scoped>
/* (Tus estilos de 'navbar' y 'main' se quedan igual) */
.navbar {
  background-color: #ff0909;
  padding: 20px 30px;
  border-bottom: 1px solid #ddd;
  display: flex;
  gap: 25px; 
  position: sticky;
  top: 0;
  z-index: 10;
}

.navbar a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 1.1em;
}
</style>