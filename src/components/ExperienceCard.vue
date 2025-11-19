<script setup>
defineProps({
  skill: {  // <-- Debe ser "skill", no "project"
    type: Object,
    required: true,
    default: () => ({})
  }
});
</script>

<template>
  <div class="experience-card">
    <h3>{{ skill?.group || 'Sin categoría' }}</h3>
    
    <div class="skills-list">
      <span 
        v-for="(name, index) in (skill?.names || [])" 
        :key="index" 
        class="skill-badge"
      >
        {{ name }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.experience-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  max-width: 400px;
}

h3 {
  margin-top: 0;
  color: #333;
  font-size: 1.2em;
}

.skills-list {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 12px;
}

.skill-badge {
  background-color: #007bff;
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
}
</style>