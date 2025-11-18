<script setup>
// 1. Importamos nuestros datos y nuestro componente
import { projects } from '@/data/projects.js';
import ProjectCard from '@/components/ProjectCard.vue';
</script>

<template>
  <div class="projects-page">
    <h1>Mis Proyectos</h1>
    <p>Aquí puedes ver algunos de los proyectos en los que he trabajado.</p>
    
    <div class="projects-list">
      <ProjectCard 
        v-for="project in projects" 
        :key="project.id" 
        :project="project" 
      />
    </div>
  </div>
</template>

<style scoped>
.projects-page {
  text-align: center;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.projects-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}
</style>