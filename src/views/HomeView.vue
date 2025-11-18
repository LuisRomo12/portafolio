<script setup>


</script>

<template>
  <div class="home-page">
    <h1>¡Bienvenido a mi Portafolio!</h1>
    <p>
      Soy Luis Manuel Romo Garcia, un desarrollador apasionado por crear aplicaciones web
      modernas y funcionales.
    </p>
    <p>
      Siéntete libre de explorar mis
      <RouterLink to='/proyectos'>proyectos</RouterLink>.
    </p>
  </div>
</template>

<style scoped>
.home-page {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  text-align: left;
  line-height: 1.6;
}


h1 {
  margin-bottom: 16px;
}
</style>