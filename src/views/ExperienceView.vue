<script setup>
// 1. Importamos nuestros datos y nuestro componente
import { experience } from '@/data/skills.js';
import ExperienceCard from '@/components/ExperienceCard.vue'; // Asegúrate que el nombre coincida
</script>

<template>
  <div class="experience-page">
    <h1>Qué Ofrezco</h1>
    <p>Aquí puedes ver algunas de las tecnologías que uso.</p>
    
    <div class="experience-list">
      <ExperienceCard 
        v-for="item in experience" 
        :key="item.id" 
        :skill="item" 
      />
    </div>
  </div>
</template>

<style scoped>
.experience-page {
  text-align: center;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  height: calc(100vh - 100px); 
  display: flex;
  flex-direction: column;
}

.experience-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
  overflow-y: auto;
  padding: 10px;
}
</style>