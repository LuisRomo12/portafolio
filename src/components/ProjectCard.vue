<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="project-card">
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>

    <div class="techs">
      <span v-for="tech in project.techs" :key="tech" class="tech-badge">
        {{ tech }}
      </span>
    </div>
    
    <a :href="project.projectUrl" target="_blank" class="project-link">
      Ver proyecto
    </a>
  </div>
</template>

<style scoped>
/* "scoped" significa que este CSS solo se aplica a ESTE componente */
.project-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  max-width: 400px;
}

/* .project-image {
  width: 100%;
  border-radius: 4px;
} */

h3 {
  margin-top: 0;
}

.techs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin: 12px 0;
}

.tech-badge {
  background-color: #eee;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
}

.project-link {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}
</style>