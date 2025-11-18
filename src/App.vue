<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar">
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/proyectos">Proyectos</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>

.navbar {
  background-color: #ff0909;
  padding: 20px 30px;
  border-bottom: 1px solid #ddd;
  display: flex;
  gap: 25px; 
}

.navbar a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 1.1em;
}

.navbar a.router-link-exact-active {
  color: #42b983; /* Verde de Vue */
}
</style>